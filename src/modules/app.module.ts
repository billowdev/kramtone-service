import { Module } from '@nestjs/common';
import { UserModule } from './user-account/user-account.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ColorSchemeModule } from './color-scheme/color-scheme.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { GroupDataModule } from './group-data/group-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.register({ dest: './public' }),
    DatabaseModule,
    ColorSchemeModule,
    CategoryModule,
    ProductModule,
    UserModule.forRoot({ lazy: true }),
    GroupDataModule.forRoot({ lazy: true }),
  ],
})
export class AppModule {

}
