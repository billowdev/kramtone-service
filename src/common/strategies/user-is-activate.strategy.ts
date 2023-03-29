import * as dotenv from 'dotenv';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { UserService } from '../../modules/user-account/services/user-account.service';
dotenv.config();

@Injectable()
export class UserIsActivateAuthStrategy extends PassportStrategy(Strategy, 'isuseractivate') {
	constructor(private readonly userService: UserService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.JWTKEY,
		});
	}

	async validate(payload: any) {
		const {activated} = await this.userService.findOne(payload.sub);
		if (!activated) {
			throw new ForbiddenException('User Unactivated');
		}
		return payload;
	}
}