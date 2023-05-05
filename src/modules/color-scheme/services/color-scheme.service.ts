import { BadRequestException, ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { COLOR_SCHEME_REPOSITORY, GROUP_COLOR_SCHEME_REPOSITORY } from '../../../common/constants';
import { BulkCreateColorSchemeDto, CreateColorSchemeDto } from '../dto/create-color-scheme.dto';
import { UpdateColorSchemeDto } from '../dto/update-color-scheme.dto';
import { ColorSchemeEntity } from '../entities/color-scheme.entity';
import { GroupColorSchemeEntity } from '../entities/group-color-scheme.entity';
import { ColorSchemeArrayType, GroupColorSchemeArrayType } from '../types/color-scheme.types';
import { GroupDataService } from './../../group-data/services/group-data.service';

@Injectable()
export class ColorSchemeService {

  constructor(
    @Inject(COLOR_SCHEME_REPOSITORY) private readonly ColorSchemeRepo: typeof ColorSchemeEntity,
    @Inject(GROUP_COLOR_SCHEME_REPOSITORY) private readonly groupColorSchemeRepo: typeof GroupColorSchemeEntity,
    private readonly groupDataService: GroupDataService
  ) { }

  async create(createColorSchemeDto: CreateColorSchemeDto): Promise<ColorSchemeEntity> {
    try {
      return await this.ColorSchemeRepo.create<ColorSchemeEntity>(createColorSchemeDto)
    } catch (error) {
      console.log(error)
      throw new BadRequestException()
    }
  }

  async bulkCreate(bulkCreateColorSchemeDto: BulkCreateColorSchemeDto): Promise<ColorSchemeArrayType> {
    try {
      return await this.ColorSchemeRepo.bulkCreate<ColorSchemeEntity>(bulkCreateColorSchemeDto)
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAll(): Promise<ColorSchemeArrayType> {
    try {
      return await this.ColorSchemeRepo.findAll<ColorSchemeEntity>()
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findOne(id: string): Promise<ColorSchemeEntity> {
    try {
      const colorId = id.toUpperCase()
      return await this.ColorSchemeRepo.findOne<ColorSchemeEntity>({ where: { id: colorId } })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async update(id: string, updateColorSchemeDto: UpdateColorSchemeDto) {
    try {
      const colorId = id.toUpperCase()
      const data = await this.ColorSchemeRepo.update<ColorSchemeEntity>(
        updateColorSchemeDto, { where: { id: colorId } }
      )
      return data
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async remove(id: string): Promise<number> {
    try {
      const colorId = id.toUpperCase()
      const data: number = await this.ColorSchemeRepo.destroy<ColorSchemeEntity>({
        where: { id: colorId }
      })
      if (!data) throw new BadRequestException()
      return data
    } catch (error) {
      throw new BadRequestException()
    }


  }


  // ============ group color scheme

  async createGroupColorScheme(createGroupColorSchemeDto: { groupId: string, colorSchemeId: string }): Promise<GroupColorSchemeEntity> {
    const colorScheme = await this.ColorSchemeRepo.findByPk(createGroupColorSchemeDto.colorSchemeId);
    const group = await this.groupDataService.findOne(createGroupColorSchemeDto.groupId);

    if (!colorScheme || !group) {
      throw new Error('User or group not found.');
    }
    const isExist = await this.groupColorSchemeRepo.findOne({
      where:{
        groupId: group.id,
        colorSchemeId: colorScheme.id
      }
    })
    if(isExist) {
      throw new ConflictException('the color scheme already exist !')
    }
    const groupColorScheme = new GroupColorSchemeEntity();
    groupColorScheme.colorSchemeId = colorScheme.id;
    groupColorScheme.groupId = group.id;

    return await groupColorScheme.save();
  }

  async findAllGroupColorScheme(groupId: string): Promise<any> {
    try {

      const response = await this.groupColorSchemeRepo.findAll({
        where: { groupId },
        include: [
          {
            model: ColorSchemeEntity as null,
          },
        ]
      })

      return response
    } catch (error) {
      // console.log(error)
      throw new BadRequestException()
    }
  }

  async findOneGroupColorScheme(colorSchemeId: string, groupId: string): Promise<GroupColorSchemeEntity> {
    try {
      return await this.groupColorSchemeRepo.findOne({
        where: { colorSchemeId, groupId }
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async removeGroupColorScheme(id: string): Promise<any> {
    try {
      return await this.groupColorSchemeRepo.destroy({
        where: { id }
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }


}
