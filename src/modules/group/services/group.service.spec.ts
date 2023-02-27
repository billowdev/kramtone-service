import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from './group.service';
import { groupProviders } from './../entities/group.providers';

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService, ...groupProviders],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
