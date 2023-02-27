import { Module } from "@nestjs/common";
import { UserService } from '../user/services/user.service';
import { GroupService } from '../group/services/group.service';
import { userProviders } from "../user/entities/user.providers";
import { JwtService } from '@nestjs/jwt';
import { groupProviders } from '../group/entities/group.providers';
import { AddressService } from '../address/services/address.service';
import { addressProviders } from "../address/entities/address.providers";

@Module({
	providers: [
		JwtService,
		UserService, ...userProviders,
		GroupService, ...groupProviders,
		AddressService, ...addressProviders
	],
	exports: [
		UserService, ...userProviders,
		GroupService, ...groupProviders,
		AddressService, ...addressProviders
	]
})
export class SharedModule { }