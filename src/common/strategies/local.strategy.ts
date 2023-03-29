import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './../../modules/user-account/services/user-account.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(private readonly userService: UserService) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
    }

    async validate(username: string, password: string): Promise<any> {
     
        const auth = await this.userService.validateAuth(username, password);
      
        if (!auth) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return auth;
    }
}