import { Test, TestingModule } from '@nestjs/testing';
import { SharedModule } from '../../shared/shared.module';
import { groupProviders } from '../entities/group-data.providers';
import { GroupDataService } from '../services/group-data.service';
import { GroupDataController } from './group-data.controller';

describe('GroupDataController', () => {
  let controller: GroupDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupDataController],
      providers: [GroupDataService, ...groupProviders],
      imports: [SharedModule],

    }).compile();

    controller = module.get<GroupDataController>(GroupDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
