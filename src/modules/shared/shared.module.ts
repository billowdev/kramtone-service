import { Module } from "@nestjs/common";
import { UserService } from '../user-account/services/user-account.service';
import { GroupDataService } from '../group-data/services/group-data.service';
import { userProviders } from "../user-account/entities/user-account.providers";
import { JwtService } from '@nestjs/jwt';
import { groupProviders } from '../group-data/entities/group-data.providers';

@Module({
	providers: [
		JwtService,
		UserService, ...userProviders,
		GroupDataService, ...groupProviders,
	],
	exports: [
		UserService, ...userProviders,
		GroupDataService, ...groupProviders,
	]
})
export class SharedModule { }