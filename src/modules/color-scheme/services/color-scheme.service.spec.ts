import { Test, TestingModule } from '@nestjs/testing';
import { ColorSchemeProviders } from '../entities/color-scheme.providers';
import { ColorSchemeService } from './color-scheme.service';

describe('ColorSchemeService', () => {
  let service: ColorSchemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorSchemeService, ...ColorSchemeProviders],
    }).compile();

    service = module.get<ColorSchemeService>(ColorSchemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
