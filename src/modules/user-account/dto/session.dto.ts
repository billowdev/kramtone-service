import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SessionDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	sub: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	gid: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	role: string;

	
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	activated: boolean;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	iat: number;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	exp: number;
}
