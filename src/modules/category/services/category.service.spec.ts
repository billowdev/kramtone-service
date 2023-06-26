import { Test, TestingModule } from '@nestjs/testing';
import { categoryProviders } from '../entities/category.providers';
import { CategoryService } from './category.service';
import { productProviders } from 'src/modules/product/entities/product.providers';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService, ...categoryProviders, ...productProviders],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
