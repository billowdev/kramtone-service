import { Module, forwardRef, DynamicModule } from '@nestjs/common';
import { UserController } from './controllers/user-account.controller';
import { UserService } from './services/user-account.service';
import { userProviders } from './entities/user-account.providers';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtAuthStrategy, LocalStrategy } from '../../common/strategies';
import { RolesGuard } from '../../common/guards';
import { SharedModule } from '../shared/shared.module';
dotenv.config();

@Module({
  imports: [
    PassportModule,
    SharedModule,
    // forwardRef(() => GroupModule),
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
    RolesGuard
  ]
})
export class UserModule {
  static forRoot(optional: any): DynamicModule {
    return {
      module: UserModule,
      imports: [SharedModule],
      providers: [UserService],
    };
  }
}
