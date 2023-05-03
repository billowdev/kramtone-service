import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user-account.dto';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
	@IsOptional()
	@IsString()
	username: string;

	@IsBoolean()
	@IsOptional()
	activated?: boolean;

	@IsBoolean()
	@IsOptional()
	removed?: boolean;

	@IsString()
	@IsOptional()
	role?: string;

	@IsString()
	@IsOptional()
	name: string;

	@IsString()
	@IsOptional()
	surname: string;

	@IsString()
	@IsOptional()
	phone?: string;

	@IsEmail()
	@IsOptional()
	email: string;

	@IsBoolean()
	@IsOptional()
	remove?: boolean;

	@IsString()
	@IsOptional()
	groupId?: string;
}
