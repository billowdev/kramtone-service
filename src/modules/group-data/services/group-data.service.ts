import { BadRequestException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateGroupDto } from '../dto/create-group-data.dto';
import { UpdateGroupDto } from '../dto/update-group-data.dto';
import { GroupDataEntity } from './../entities/group-data.entity';
import { GROUP_REPOSITORY } from './../../../common/constants/repository.constant';
import { GroupDataArrayType } from '../types/group-data.types';
import { Op } from 'sequelize';
import { UserEntity } from './../../user-account/entities/user-account.entity';
import { Role } from '../../user-account/types/role.enum';
import { UserService } from './../../user-account/services/user-account.service';
import removeNullProperties from "../../../common/utils/removeNullProperties";
import { removeExistImage } from 'src/common/utils/remove-exist-image.util';
import { ProductEntity } from 'src/modules/product/entities/product.entity';
import { ColorSchemeEntity } from 'src/modules/color-scheme/entities/color-scheme.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { GroupColorSchemeEntity } from './../../color-scheme/entities/group-color-scheme.entity';

@Injectable()
export class GroupDataService {
  constructor(
    @Inject(GROUP_REPOSITORY)
    private readonly groupRepo: typeof GroupDataEntity,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService
  ) { }

  async create(createGroupDto: CreateGroupDto): Promise<GroupDataEntity> {
    try {
      return await this.groupRepo.create<GroupDataEntity>(createGroupDto);
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAll(
    //   query: {
    //   categoryId?: string;
    //   colorSchemeId?: string;
    // }
  ): Promise<GroupDataArrayType> {
    try {
      let where: { [key: string]: any } = { verified: true };
      const attributes: { exclude: string[] } = { exclude: [] };
      const include = [
        {
          model: ProductEntity,
          attributes: {
            exclude: ['groupId'],
            where: {
              publish: true,
            }
          },
          include: [
            {
              model: ColorSchemeEntity,
            },
          ]
        },
      ];

      // if (!query.categoryId && !query.colorSchemeId) {
      //   where = {}; // if no filter data is provided, return all groups
      // }

      const groups = await this.groupRepo.findAll<GroupDataEntity>({
        where,
        attributes,
        include,
      });

      // Filter out groups that have no matching products
      // const filteredGroups = groups.filter((group) => {
      //   return group.products.some((product) => {
      //     if (query.categoryId && product.category.id !== query.categoryId) {
      //       return false;
      //     }
      //     if (query.colorSchemeId && product.colorScheme.id !== query.colorSchemeId) {
      //       return false;
      //     }
      //     return true;
      //   });
      // });

      return groups;
    } catch (error) {
      console.error(error);
      throw new BadRequestException();
    }
  }

  async adminFindAll(query: {
    categoryId?: string;
    colorSchemeId?: string;
  }): Promise<GroupDataArrayType> {
    try {
      let where: { [key: string]: any } = {};
      const attributes: { exclude: string[] } = { exclude: [] };
      const include = [
        {
          model: ProductEntity,
          attributes: {
            exclude: ['groupId'],
          },

        },
      ];

      const groups = await this.groupRepo.findAll<GroupDataEntity>({
        where,
        attributes,
        include,
      });
      return groups;
    } catch (error) {
      console.error(error);
      throw new BadRequestException();
    }
  }

  async findOne(id: string): Promise<GroupDataEntity> {
    try {
      return await this.groupRepo.findOne<GroupDataEntity>({
        where: { id },
        include: [
          {
            model: ProductEntity,
            attributes: {
              exclude: ['groupId'],
            },
            include: [
              {
                model: CategoryEntity,
                attributes: {
                  exclude: ['groupId'],
                },
              },
              {
                model: ColorSchemeEntity,
                attributes: {
                  exclude: ['groupId'],
                },

              },
            ],
          },
        ],
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'addressId']
        },
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }
  async removeGroupImage(oldImage: string, newImage: string) {
    if (
      (oldImage !== "" || oldImage !== null) &&
      (oldImage !== newImage)) {
      removeExistImage(newImage, 'groups')
    }
  }


  async adminUpdate(id: string, updateGroupDto: UpdateGroupDto): Promise<number[]> {
    try {
      const newUpdate = removeNullProperties<UpdateGroupDto>(updateGroupDto)
      // console.log(newUpdate)
      const oldGroupData = await this.groupRepo.findOne({ where: { id } })

      const oldLogo: string = oldGroupData.logo;
      const oldBanner: string = oldGroupData.banner;
      const bannerReq: string = newUpdate?.banner;
      const logoReq: string = newUpdate?.logo;

      if (logoReq) {
        if (oldLogo !== logoReq) {
          removeExistImage(oldLogo, 'groups')
        }
      }

      if (bannerReq) {
        if (oldBanner !== bannerReq) {
          removeExistImage(oldBanner, 'groups')
        }
      }
      return await this.groupRepo.update<GroupDataEntity>({
        ...newUpdate
      },
        {
          where: { id }
        }
      )
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async removeBannerLogo(id: string, remove: { banner?: boolean, logo?: boolean }): Promise<number[]> {
    try {
      const oldGroupData = await this.groupRepo.findOne({ where: { id } })
      if (remove.banner) {
        removeExistImage(oldGroupData.banner, 'groups')


        return await this.groupRepo.update<GroupDataEntity>({
          banner: 'banner.png'
        },
          {
            where: { id }
          }
        )
      }

      if (remove.logo) {
        removeExistImage(oldGroupData.logo, 'groups')
        return await this.groupRepo.update<GroupDataEntity>({
          logo: 'logo.png'
        },
          {
            where: { id }
          }
        )
      }

    } catch (error) {
      throw new BadRequestException()
    }
  }

  async update(id: string, updateGroupDto: UpdateGroupDto, user: any): Promise<number[]> {
    try {
      const newUpdate = removeNullProperties<UpdateGroupDto>(updateGroupDto)
      // console.log(newUpdate)
      const oldGroupData = await this.groupRepo.findOne({ where: { id } })

      const oldLogo: string = oldGroupData.logo;
      const oldBanner: string = oldGroupData.banner;
      const bannerReq: string = newUpdate?.banner;
      const logoReq: string = newUpdate?.logo;

      if (logoReq) {
        if (oldLogo !== logoReq) {
          removeExistImage(oldLogo, 'groups')
        }
      }

      if (bannerReq) {
        if (oldBanner !== bannerReq) {
          removeExistImage(oldBanner, 'groups')
        }
      }

      if (user.role === Role.ADMIN) {
        return await this.groupRepo.update<GroupDataEntity>({
          ...newUpdate
        },
          {
            where: { id }
          }
        )
      } else {

        if (user.gid === id) {
          return await this.groupRepo.update<GroupDataEntity>({
            ...newUpdate
          },
            {
              where: { id }
            }
          )
        } else {
          return [403]
        }
      }

    } catch (error) {
      throw new BadRequestException()
    }
  }

  async remove(id: string): Promise<number> {
    try {
      return await this.groupRepo.destroy({
        where: { id }
      })
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
