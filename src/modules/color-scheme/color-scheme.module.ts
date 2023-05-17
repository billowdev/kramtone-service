import { Module } from '@nestjs/common';
import { ColorSchemeController } from './controllers/color-scheme.controller';
import { ColorSchemeProviders } from './entities/color-scheme.providers';
// import { groupColorSchemeProviders } from './entities/group-color-scheme.providers';
import { ColorSchemeService } from './services/color-scheme.service';
import { GroupDataModule } from '../group-data/group-data.module';
import { ProductModule } from '../product/product.module';
import { productProviders } from '../product/entities/product.providers';

@Module({
  // imports: [SequelizeModule.forFeature([ColorSchemeEntity, GroupColorSchemeEntity])],
  imports: [
    GroupDataModule,
    ProductModule
  ],
  controllers: [ColorSchemeController],
  providers: [
    ColorSchemeService,
    ...ColorSchemeProviders,
    ...productProviders
    // ...groupColorSchemeProviders
  ]
})

export class ColorSchemeModule {
  // static forRoot(optional: any): DynamicModule {
  //   return {
  //     module: ColorSchemeModule,
  //     providers: [
  //       ColorSchemeService,
  //       ...ColorSchemeProviders,
  //       ...groupColorSchemeProviders
  //     ],
  //   };
  // }
}

