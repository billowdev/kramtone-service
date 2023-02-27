import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { userProviders } from './../entities/user.providers';
import { JwtAuthStrategy, LocalStrategy } from '../../../common/strategies';
import { RolesGuard } from '../../../common/guards';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from 'src/modules/shared/shared.module';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule,
        SharedModule,
        // forwardRef(() => UserModule),
        JwtModule.register({
          secret: process.env.JWTKEY,
          signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
        })
      ],
      controllers: [UserController],
      providers: [
        UserService,
        ...userProviders,
        LocalStrategy,
        JwtAuthStrategy,
        RolesGuard,
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
