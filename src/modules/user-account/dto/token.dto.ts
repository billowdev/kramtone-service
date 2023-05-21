import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Role } from "../types/role.enum";

export class TokenDto {
	@ApiProperty({
		description: 'The auth id from session',
		example: 'd420c5d2-6cb7-44d1-b28e-619681f874cc'
	})
	@IsString()
	@IsNotEmpty()
	sub: string;

	@ApiProperty({
		description: 'The role of user',
		example: Role.MEMBER
	})
	@IsString()
	@IsNotEmpty()
	role: string;

	@ApiProperty({
		description: 'The refresh access token',
		example: "TOKENKEY"
	})
	@IsString()
	@IsOptional()
	refreshToken?: string

	@IsString()
	@IsNotEmpty()
	activated: boolean;

	@ApiProperty({
		description: 'The group id from session',
		example: 'd420c5d2-6cb7-44d1-b28e-619681f872cc'
	})
	@IsString()
	@IsNotEmpty()
	gid: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	groupType: string;
	
	@ApiProperty()
	@IsString()
	@IsOptional()
	groupName: string;
}
