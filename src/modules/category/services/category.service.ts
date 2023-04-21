import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CATEGORY_REPOSITORY } from '../../../common/constants';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@Inject(CATEGORY_REPOSITORY) private readonly categoryRepo: typeof CategoryEntity) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    try {
      return await this.categoryRepo.create<CategoryEntity>(createCategoryDto)
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAll(): Promise<CategoryEntity[]> {
    try {
      return await this.categoryRepo.findAll<CategoryEntity>({
        where: {
          isDefault: true
        }
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAllByGroup(groupId: string): Promise<CategoryEntity[]> {
    try {
      return await this.categoryRepo.findAll<CategoryEntity>({
        where: {
          groupId,
        },
        attributes: {
          exclude: ['groupId']
        }
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAllByGroupId(groupId: string): Promise<CategoryEntity[]> {
    try {
      return await this.categoryRepo.findAll<CategoryEntity>({
        where: {
          groupId,
          isDefault: false
        },
        attributes: {
          exclude: ['groupId']
        }
      })
    } catch (error) {
      throw new BadRequestException()
    }
  }


  async findOne(id: string): Promise<CategoryEntity> {
    try {
      return await this.categoryRepo.findOne<CategoryEntity>({ where: { id }, raw: true });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<number[]> {
    try {
      return await this.categoryRepo.update<CategoryEntity>({ ...updateCategoryDto }, { where: { id } })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async remove(id: string): Promise<number> {
    try {
      return await this.categoryRepo.destroy<CategoryEntity>({ where: { id } })
    } catch (error) {
      throw new BadRequestException()
    }
  }
}
