import { Test, TestingModule } from '@nestjs/testing';
import { productImageProviders } from '../entities/product-image.providers';
import { productProviders } from '../entities/product.providers';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, ...productProviders, ...productImageProviders],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
