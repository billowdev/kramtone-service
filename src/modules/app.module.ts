import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { AddressModule } from './address/address.module';
import { ColorSchemeModule } from './color-scheme/color-scheme.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({ dest: './public' }),
    DatabaseModule,
    AddressModule,
    ColorSchemeModule,
    CategoryModule,
    ProductModule,
    UserModule.forRoot({ lazy: true }),
    GroupModule.forRoot({ lazy: true }),
  ],
})
export class AppModule {

}
