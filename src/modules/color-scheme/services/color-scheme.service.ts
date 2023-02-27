import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { COLOR_SCHEME_REPOSITORY, GROUP_COLOR_SCHEME_REPOSITORY } from '../../../common/constants';
import { BulkCreateColorSchemeDto, CreateColorSchemeDto } from '../dto/create-color-scheme.dto';
import { UpdateColorSchemeDto } from '../dto/update-color-scheme.dto';
import { ColorSchemeEntity } from '../entities/color-scheme.entity';
import { GroupColorSchemeEntity } from '../entities/group-color-scheme.entity';
import { ColorSchemeArrayType } from '../types/color-scheme.types';
import { GroupService } from './../../group/services/group.service';

@Injectable()
export class ColorSchemeService {

  constructor(
    @Inject(COLOR_SCHEME_REPOSITORY) private readonly ColorSchemeRepo: typeof ColorSchemeEntity,
    @Inject(GROUP_COLOR_SCHEME_REPOSITORY) private readonly groupColorSchemeRepo: typeof GroupColorSchemeEntity,
    private readonly groupService: GroupService
  ) { }

  async create(createColorSchemeDto: CreateColorSchemeDto): Promise<ColorSchemeEntity> {
    try {
      return await this.ColorSchemeRepo.create<ColorSchemeEntity>(createColorSchemeDto)
      
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async bulkCreate(bulkCreateColorSchemeDto: BulkCreateColorSchemeDto) : Promise<ColorSchemeArrayType> {
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

  async createGroupColorScheme(groupId: string, colorSchemeId: string): Promise<GroupColorSchemeEntity> {
    const colorScheme = await this.ColorSchemeRepo.findByPk(colorSchemeId);
    const group = await this.groupService.findOne(groupId);
  
    if (!colorScheme || !group) {
      throw new Error('User or group not found.');
    }
  
    const groupColorScheme = new GroupColorSchemeEntity();
    groupColorScheme.colorSchemeId = colorScheme.id;
    groupColorScheme.groupId = group.id;
  
    return await groupColorScheme.save();
  }


}
