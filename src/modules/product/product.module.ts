import { DynamicModule, Module } from '@nestjs/common';
import { productProviders } from './entities/product.providers';
import { productImageProviders } from './entities/product-image.providers';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProviders, ...productImageProviders]
})
export class ProductModule {
 
  
 }
