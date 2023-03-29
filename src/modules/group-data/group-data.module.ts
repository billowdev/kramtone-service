import { DynamicModule, Module } from '@nestjs/common';
import { GroupDataController } from './controllers/group-data.controller';
import { groupProviders } from './entities/group-data.providers';
import { GroupDataService } from './services/group-data.service';

import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    SharedModule
  ],
  controllers: [GroupDataController],
  providers: [GroupDataService, ...groupProviders],
  exports: [GroupDataService]
})
export class GroupDataModule {
  static forRoot(options: any): DynamicModule {
    return {
      module: GroupDataModule,
      imports: [SharedModule],
      providers: [GroupDataService],
    };
  }
}
