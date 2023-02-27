import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { categoryProviders } from './entities/category.providers';
import { CategoryService } from './services/category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, ...categoryProviders],

})
export class CategoryModule { }
