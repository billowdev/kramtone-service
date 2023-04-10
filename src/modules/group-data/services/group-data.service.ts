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

  async findAll(): Promise<GroupDataArrayType> {
    try {
      return await this.groupRepo.findAll<GroupDataEntity>({
        where: {
          verified: true
        },
        attributes: {
          exclude: ['verified']
        },
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async adminFindAll(keyword?: string, page?: number, pageSize?: number): Promise<GroupDataArrayType> {
    try {
      const offset = (page - 1) * pageSize;
      if (keyword) {
        return await this.groupRepo.findAll<GroupDataEntity>({
          where: {
            [Op.or]: [
              {
                groupName: { [Op.iLike]: `%${keyword}%` }
              },
              {
                agency: { [Op.iLike]: `%${keyword}%` }
              },
              {
                groupType: { [Op.eq]: keyword }
              },
              {
                phone: { [Op.iLike]: `%${keyword}%` }
              },
              {
                email: { [Op.iLike]: `%${keyword}%` }
              },
            ],
          },
          attributes: {
            exclude: ['addressId']
          },
          include: [
            {
              model: UserEntity,
              where: {
                remove: false
              },
              attributes: {
                exclude: ['hashPassword', 'role', 'remove']
              }
            }
          ]
        });
      } else if (page && pageSize) {
        return await this.groupRepo.findAll<GroupDataEntity>({
          offset,
          limit: pageSize,
          include: [
            {
              model: UserEntity,
              where: {
                remove: false
              },
              attributes: {
                exclude: ['hashPassword', 'role', 'remove']
              }
            }
          ]
        });
      } else {
        return await this.groupRepo.findAll<GroupDataEntity>({
          include: [
            {
              model: UserEntity,
              where: {
                remove: false
              },
              attributes: {
                exclude: ['hashPassword', 'role', 'remove']
              }
            }
          ]

        });
      }
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findOne(id: string): Promise<GroupDataEntity> {
    try {
      return await this.groupRepo.findOne<GroupDataEntity>({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'addressId']
        },
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async update(id: string, updateGroupDto: UpdateGroupDto, user: any): Promise<number[]> {
    try {
      const newUpdate = removeNullProperties<UpdateGroupDto>(updateGroupDto)
        console.log(newUpdate)
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
