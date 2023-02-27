import { Test, TestingModule } from '@nestjs/testing';
import { groupProviders } from '../entities/group.providers';
import { GroupService } from '../services/group.service';
import { GroupController } from './group.controller';

describe('GroupController', () => {
  let controller: GroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [GroupService, ...groupProviders],
    }).compile();

    controller = module.get<GroupController>(GroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
