import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { PRODUCT_IMAGE_REPOSITORY, PRODUCT_REPOSITORY } from '../../../common/constants';
import { CategoryEntity } from '../../../modules/category/entities/category.entity';
import { UserEntity } from '../../../modules/user-account/entities/user-account.entity';
import { CreateProductImageDto } from '../dto/create-product-image.dto';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductImageEntity } from '../entities/product-image.entity';
import { ProductEntity } from '../entities/product.entity';
import { ProductImageArrayType } from '../types/product.types';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly productRepo: typeof ProductEntity,
    @Inject(PRODUCT_IMAGE_REPOSITORY) private readonly productImageRepo: typeof ProductImageEntity
  ) { }

  async createProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
    try {
      return await this.productRepo.create<ProductEntity>(createProductDto);
    } catch (error) {
      throw new BadRequestException()
    }
  }


  async findAllProduct(): Promise<ProductEntity[]> {
    try {
      return await this.productRepo.findAll<ProductEntity>({
        // include: [
        //   {
        //     model: CategoryEntity as null,
        //     attributes: {
        //       exclude: ['image', 'desc', 'createdAt', 'updatedAt']
        //     }
        //   },
        //   {
        //     model: ProductImageEntity as null,
        //     attributes: {
        //       exclude: ['productId', 'createdAt', 'updatedAt']
        //     }
        //   },
        //   {
        //     model: UserEntity as null,
        //     attributes: {
        //       exclude: ['shopOwner', 'authId', 'addressId', 'createdAt', 'updatedAt']
        //     }
        //   }
        // ],
        // attributes: {
        //   exclude: ['userId', 'categoryId']
        // }
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findOneProduct(id: string): Promise<ProductEntity> {
    try {
      return await this.productRepo.findByPk<ProductEntity>(id, {
        // include: [
        //   {
        //     model: CategoryEntity as null,
        //     attributes: {
        //       exclude: ['image', 'desc', 'createdAt', 'updatedAt']
        //     }
        //   },
        //   {
        //     model: ProductImageEntity as null,
        //     attributes: {
        //       exclude: ['productId', 'createdAt', 'updatedAt']
        //     }
        //   },
        //   {
        //     model: UserEntity as null,
        //     attributes: {
        //       exclude: ['shopOwner', 'authId', 'addressId', 'createdAt', 'updatedAt']
        //     }
        //   }
        // ],
        // attributes: {
        //   exclude: ['userId', 'categoryId']
        // }
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<number[]> {
    try {
      const product = await this.productRepo.update<ProductEntity>({ ...updateProductDto }, { where: { id } })
      return product
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async removeProduct(id: string): Promise<number> {
    try {
      return await this.productRepo.destroy({ where: { id } })
    } catch (error) {
      throw new BadRequestException()
    }
  }

  // ============================ Product Image ===================================
  async createProductImage(createProductImageDto: CreateProductImageDto): Promise<ProductImageEntity> {
    try {
      const productImageCount = await this.productImageRepo.findAndCountAll();
      if (productImageCount.count > 10) throw new BadRequestException()
      return await this.productImageRepo.create<ProductImageEntity>(createProductImageDto);
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAllProductImage(productId: string): Promise<ProductImageArrayType> {
    try {
      return await this.productImageRepo.findAll<ProductImageEntity>({
        where: { productId }
      });
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async removeProductImage(id: string): Promise<number> {
    try {
      return await this.productImageRepo.destroy({ where: { id } })
    } catch (error) {
      throw new BadRequestException()
    }
  }


}
