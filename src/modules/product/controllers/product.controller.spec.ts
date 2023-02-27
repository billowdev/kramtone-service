import { Test, TestingModule } from '@nestjs/testing';
import { productImageProviders } from '../entities/product-image.providers';
import { productProviders } from '../entities/product.providers';
import { ProductService } from '../services/product.service';
import { ProductController } from './product.controller';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService, ...productProviders, ...productImageProviders],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
