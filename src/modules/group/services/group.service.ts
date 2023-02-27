import { BadRequestException, Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { GroupEntity } from './../entities/group.entity';
import { GROUP_REPOSITORY } from './../../../common/constants/repository.constant';
import { GroupArrayType } from '../types/group.types';
import { Op } from 'sequelize';
import { AddressEntity } from './../../address/entities/address.entity';
import { UserEntity } from './../../user/entities/user.entity';
import { SessionDto } from 'src/modules/user/dto/session.dto';
import { Role } from 'src/modules/user/types/role.enum';
import { UserService } from './../../user/services/user.service';

@Injectable()
export class GroupService {
  constructor(
    @Inject(GROUP_REPOSITORY)
    private readonly groupRepo: typeof GroupEntity,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService
  ) { }

  async create(createGroupDto: CreateGroupDto): Promise<GroupEntity> {
    try {
      return await this.groupRepo.create<GroupEntity>(createGroupDto);
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAll(): Promise<GroupArrayType> {
    try {
      return await this.groupRepo.findAll<GroupEntity>({
        where: {
          verified: true
        },
        attributes: {
          exclude: ['addressId', 'verified']
        },
        include: [
          {
            model: AddressEntity,
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
          },
        ]

      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async adminFindAll(keyword?: string, page?: number, pageSize?: number): Promise<GroupArrayType> {
    try {
      const offset = (page - 1) * pageSize;
      if (keyword) {
        return await this.groupRepo.findAll<GroupEntity>({
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
              model: AddressEntity,
            },
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
        return await this.groupRepo.findAll<GroupEntity>({
          offset,
          limit: pageSize,
          include: [
            {
              model: AddressEntity,

            },
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
        return await this.groupRepo.findAll<GroupEntity>({
          include: [
            {
              model: AddressEntity,

            },
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

  async findOne(id: string): Promise<GroupEntity> {
    try {
      return await this.groupRepo.findOne<GroupEntity>({
        where: { id },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'addressId']
        },
        include: {
          model: AddressEntity,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async update(id: string, updateGroupDto: UpdateGroupDto, user: SessionDto): Promise<number[]> {
    try {
      if (user.role === Role.ADMIN) {
        return await this.groupRepo.update<GroupEntity>({
          ...updateGroupDto
        },
          {
            where: { id }
          }
        )
      } else {
        const { groupId } = await this.userService.findOne(user.sub)

        if (groupId === id) {
          if (updateGroupDto.verified) delete updateGroupDto.verified
          return await this.groupRepo.update<GroupEntity>({
            ...updateGroupDto
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
