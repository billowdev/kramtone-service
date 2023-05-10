import { Sequelize } from 'sequelize-typescript';
import { CategoryEntity } from '../modules/category/entities/category.entity';
import { ProductImageEntity } from '../modules/product/entities/product-image.entity';
import { ProductEntity } from '../modules/product/entities/product.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../common/constants';
import { dbConfig } from './database.config';
import { GroupDataEntity } from './../modules/group-data/entities/group-data.entity';
import { UserEntity } from '../modules/user-account/entities/user-account.entity';
import { ColorSchemeEntity } from './../modules/color-scheme/entities/color-scheme.entity';
import { GroupColorSchemeEntity } from '../modules/color-scheme/entities/group-color-scheme.entity';
import { DB_IS_FORCE_DEV, DB_IS_FORCE_TEST } from './../common/constants/config.constant';
import { booleanifyUtil } from '../common/utils/booleanify.util';

export const databaseProviders = [{
   provide: SEQUELIZE,
   useFactory: async () => {
      let config;
      let isForce: boolean;
      let isForceValue: boolean;
      switch (process.env.NODE_ENV) {
         case DEVELOPMENT:
            config = dbConfig.development;
            isForceValue = booleanifyUtil(DB_IS_FORCE_DEV)
            isForce = isForceValue
            break;
         case TEST:
            config = dbConfig.test;
            isForceValue = booleanifyUtil(DB_IS_FORCE_TEST)
            isForce = isForceValue
            break;
         case PRODUCTION:
            config = dbConfig.production;
            isForceValue = booleanifyUtil(DB_IS_FORCE_TEST) || false
            isForce = isForceValue
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
         GroupDataEntity,
         // GroupColorSchemeEntity
      ]);
      // { force: true } should be fasle in production
      console.log("============")
      console.log(isForce)
      console.log("============")
      await sequelize.sync({ force: isForce });
      return sequelize;
   },
}];