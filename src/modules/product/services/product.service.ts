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
import { ProductImageArrayType, ProductQueryInterface } from '../types/product.types';
import sequelize from 'sequelize';
import { Op } from 'sequelize';
import isAllValuesUndefined from 'src/common/utils/is-all-undefined';
import { GroupDataEntity } from 'src/modules/group-data/entities/group-data.entity';
import { removeExistImage } from 'src/common/utils/remove-exist-image.util';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly productRepo: typeof ProductEntity,
    @Inject(PRODUCT_IMAGE_REPOSITORY) private readonly productImageRepo: typeof ProductImageEntity
  ) { }

  async createProduct(createProductDto: any): Promise<ProductEntity> {
    try {
      const response = await this.productRepo.create<ProductEntity>(createProductDto);

      return response
    } catch (error) {
      throw new BadRequestException()
    }
  }
  async findAllProductByGroup(groupId: string): Promise<ProductEntity[]> {
    try {

      const products = await this.productRepo.findAll({
        where: { groupId },
        include: [
          {
            model: CategoryEntity as null,
            attributes: {
              exclude: ['image', 'desc', 'createdAt', 'updatedAt', 'isDefault', 'groupId']
            }
          },
          {
            model: ProductImageEntity as null,
            attributes: {
              exclude: ['productId', 'createdAt', 'updatedAt']
            }
          },
          {
            model: GroupDataEntity as null,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'verified']
            }
          }
        ],
        attributes: {
          exclude: ['groupDataId', 'categoryId']
        }
      });

      return products;
    } catch (error) {
      throw new BadRequestException()
    }
  }

  async findAllProduct(q: ProductQueryInterface): Promise<ProductEntity[]> {
    try {
      const products = await this.productRepo.findAll();
      return products;
    } catch (error) {
      console.log(error)
      throw new BadRequestException()
    }
    // try {
    //   let whereClause = {};
    //   const searchableFields = [
    //     "name",
    //     "desc",
    //     "price",
    //     // "groupDataId",
    //     // "categoryId",
    //   ];

    //   if (!isAllValuesUndefined(q)) {
    //     whereClause = {
    //       [Op.or]: searchableFields.map((field) => ({
    //         [field]: {
    //           [Op.like]: `%${q[field]}%`,
    //         },
    //       })),
    //     };
    //     if (q.keyword) {
    //       whereClause = {
    //         ...whereClause,
    //         [Op.or]: [
    //           ...searchableFields.map((field) =>
    //            sequelize.where(sequelize.fn("LOWER", sequelize.col(field)), "LIKE", `%${q.keyword}%`)),
    //         ],
    //       };
    //     }
    //   }

    //   const response = await this.productRepo.findAll({
    //     where: whereClause,
    //     // raw: true
    //   });


    //   return response;
    // } catch (error) {
    //   console.log(error)
    //   throw new BadRequestException('Unable to retrieve all product')
    // }


  }

  async findOneProduct(id: string): Promise<ProductEntity> {
    try {
      return await this.productRepo.findOne<ProductEntity>({
        where: { id },
        include: [
          {
            model: CategoryEntity as null,
            attributes: {
              exclude: ['image', 'desc', 'createdAt', 'updatedAt', 'isDefault', 'groupId']
            }
          },
          {
            model: ProductImageEntity as null,
            attributes: {
              exclude: ['productId', 'createdAt', 'updatedAt']
            }
          },
          {
            model: GroupDataEntity as null,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'verified']
            }
          }
        ],
        attributes: {
          exclude: ['groupId', 'categoryId']
        }
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

  async removeProductImage(id: string, productId: string): Promise<number> {
    try {
      console.log("==============")

      const image = await this.productImageRepo.findOne({
        where: { id, productId },
        raw: true
      })
      if (image) {
        removeExistImage(image.image, 'products')
      }
      console.log(id, productId)

      console.log("==============")

      return await this.productImageRepo.destroy({ where: { id, productId } })
    } catch (error) {
      throw new BadRequestException()
    }
  }


}
