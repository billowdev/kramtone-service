import { Test, TestingModule } from '@nestjs/testing';
import { userProviders } from '../entities/user.providers';
import { UserService } from './user.service';
import { JwtAuthStrategy, LocalStrategy } from '../../../common/strategies';
import { RolesGuard } from '../../../common/guards';
import { GroupModule } from '../../../modules/group/group.module';
import { AddressModule } from '../../../modules/address/address.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';


describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        GroupModule,
        AddressModule,
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
