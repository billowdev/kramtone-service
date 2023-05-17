import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CATEGORY_REPOSITORY, PRODUCT_REPOSITORY } from '../../../common/constants';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoryEntity } from '../entities/category.entity';
import { ProductEntity } from 'src/modules/product/entities/product.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject(CATEGORY_REPOSITORY) private readonly categoryRepo: typeof CategoryEntity,
    @Inject(PRODUCT_REPOSITORY) private readonly productRepo: typeof ProductEntity,

  ) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    try {
      return await this.categoryRepo.create<CategoryEntity>(createCategoryDto)
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAll(): Promise<CategoryEntity[]> {
    try {
      return await this.categoryRepo.findAll<CategoryEntity>()
    } catch (error) {
      throw new BadRequestException()
    }
  }

  // async findAllByGroup(groupId: string): Promise<CategoryEntity[]> {
  //   try {
  //     return await this.categoryRepo.findAll<CategoryEntity>({
  //       attributes: {
  //         exclude: ['groupId']
  //       }
  //     })
  //   } catch (error) {
  //     throw new BadRequestException()
  //   }
  // }

  // async findAllByGroupId(groupId: string): Promise<CategoryEntity[]> {
  //   try {
  //     return await this.categoryRepo.findAll<CategoryEntity>({

  //       attributes: {
  //         exclude: ['groupId']
  //       }
  //     })
  //   } catch (error) {
  //     throw new BadRequestException()
  //   }
  // }


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
      // Check if the color scheme is associated with any product
      const associatedProducts = await this.productRepo.count({
        where: { categoryId: id },
      });

      if (associatedProducts > 0) {
        throw new BadRequestException();
      } else {
        return await this.categoryRepo.destroy<CategoryEntity>({ where: { id } })
      }
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async removeByMember(id: string, groupId: string): Promise<number> {
    try {
      return await this.categoryRepo.destroy<CategoryEntity>({ where: { id } })
    } catch (error) {
      throw new BadRequestException()
    }
  }


}
