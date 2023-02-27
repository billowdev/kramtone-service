import { Test, TestingModule } from '@nestjs/testing';
import { categoryProviders } from '../entities/category.providers';
import { CategoryService } from '../services/category.service';
import { CategoryController } from './category.controller';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService, ...categoryProviders],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
