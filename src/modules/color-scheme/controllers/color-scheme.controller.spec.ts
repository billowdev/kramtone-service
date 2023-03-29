import { Test, TestingModule } from '@nestjs/testing';
import { ColorSchemeService } from '../services/color-scheme.service';
import { ColorSchemeController } from './color-scheme.controller';
import { ColorSchemeProviders } from './../entities/color-scheme.providers';
import { GroupModule } from '../../group/group-data.module';
import { groupColorSchemeProviders } from '../entities/group-color-scheme.providers';

describe('ColorSchemeController', () => {
  let controller: ColorSchemeController;
  // https://docs.nestjs.com/techniques/mongodb#testing
  // https://stackoverflow.com/questions/71869915/nest-cant-resolve-dependencies-of-the-please-make-sure-that-the-argument-a
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports : [GroupModule],
      controllers: [ColorSchemeController],
      providers: [ColorSchemeService, ...ColorSchemeProviders,  ...groupColorSchemeProviders],



    }).compile();

    controller = module.get<ColorSchemeController>(ColorSchemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
