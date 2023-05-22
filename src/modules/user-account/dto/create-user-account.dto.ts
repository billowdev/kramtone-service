import { Role } from "../types/role.enum";
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

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

	// @IsString()
	// @IsOptional()
	// phone?: string;

	@IsString()
	@IsOptional()
	@Matches(/^\d+$/, { message: 'Phone must contain only numeric characters' })
	phone?: string;

	@IsEmail()
	@IsOptional()
	email?: string;

	@IsBoolean()
	@IsOptional()
	remove?: boolean;

	@IsString()
	@IsOptional()
	groupId?: string;
}
