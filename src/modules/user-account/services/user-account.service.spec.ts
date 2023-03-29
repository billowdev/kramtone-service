import { Test, TestingModule } from '@nestjs/testing';
import { userProviders } from '../entities/user-account.providers';
import { UserService } from './user-account.service';
import { JwtAuthStrategy, LocalStrategy } from '../../../common/strategies';
import { RolesGuard } from '../../../common/guards';
import { GroupDataModule } from '../../group-data/group-data.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        GroupDataModule,
        // forwardRef(() => UserModule),
        JwtModule.register({
          secret: process.env.JWTKEY,
          signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
        })
      ],
      providers: [
        UserService,
        ...userProviders,
        LocalStrategy,
        JwtAuthStrategy,
        RolesGuard,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
