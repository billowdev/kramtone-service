import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { categoryProviders } from './entities/category.providers';
import { CategoryService } from './services/category.service';
import { productProviders } from '../product/entities/product.providers';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService, ...categoryProviders,
    ...productProviders
  ],

})
export class CategoryModule { }
