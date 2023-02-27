import { Sequelize } from 'sequelize-typescript';
import { AddressEntity } from '../modules/address/entities/address.entity';
// import { AdminEntity } from '../modules/admin/entities/admin.entity';
import { CategoryEntity } from '../modules/category/entities/category.entity';
import { ProductImageEntity } from '../modules/product/entities/product-image.entity';
import { ProductEntity } from '../modules/product/entities/product.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../common/constants';
import { dbConfig } from './database.config';
import { GroupEntity } from './../modules/group/entities/group.entity';
import { UserEntity } from '../modules/user/entities/user.entity';
import { ColorSchemeEntity } from './../modules/color-scheme/entities/color-scheme.entity';
import { GroupColorSchemeEntity } from 'src/modules/color-scheme/entities/group-color-scheme.entity';

export const databaseProviders = [{
   provide: SEQUELIZE,
   useFactory: async () => {
      let config;
      let isForce: boolean;
      switch (process.env.NODE_ENV) {
         case DEVELOPMENT:
            config = dbConfig.development;
            isForce = false
            break;
         case TEST:
            config = dbConfig.test;
            isForce = true
            break;
         case PRODUCTION:
            config = dbConfig.production;
            isForce = false
            break;
         default:
            config = dbConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
         UserEntity,
         ColorSchemeEntity,
         CategoryEntity,
         ProductEntity,
         ProductImageEntity,
         GroupEntity,
         GroupColorSchemeEntity
      ]);
      // { force: true } should be fasle in production
      await sequelize.sync({ force: isForce });
      return sequelize;
   },
}];