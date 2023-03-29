import { Test, TestingModule } from '@nestjs/testing';
import { GroupDataService } from './group-data.service';
import { groupProviders } from './../entities/group-data.providers';

describe('GroupDataService', () => {
  let service: GroupDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupDataService, ...groupProviders],
    }).compile();

    service = module.get<GroupDataService>(GroupDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
