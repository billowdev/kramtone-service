import { Role } from "../types/role.enum";
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	username: string;

	@IsNotEmpty()
	@IsString()
	hashPassword: string;

	@IsBoolean()
	@IsOptional()
	activated?: boolean;

	@IsEnum(Role)
	@IsOptional()
	role?: Role;

	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	surname: string;

	@IsString()
	@IsOptional()
	phone?: string;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsBoolean()
	@IsOptional()
	remove?: boolean;

	@IsString()
	@IsOptional()
	groupId?: string;
}
