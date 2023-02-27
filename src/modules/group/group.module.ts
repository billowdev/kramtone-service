import { DynamicModule, Module } from '@nestjs/common';
import { GroupController } from './controllers/group.controller';
import { groupProviders } from './entities/group.providers';
import { GroupService } from './services/group.service';
import { UserModule } from './../user/user.module';
import { UserService } from './../user/services/user.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    SharedModule
  ],
  controllers: [GroupController],
  providers: [GroupService, ...groupProviders],
  exports: [GroupService]
})
export class GroupModule {
  static forRoot(options: any): DynamicModule {
    return {
      module: GroupModule,
      imports: [SharedModule],
      providers: [GroupService],
    };
  }
}
