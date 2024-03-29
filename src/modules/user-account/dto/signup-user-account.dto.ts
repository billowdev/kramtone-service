import { Role } from "../types/role.enum";
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';

export class SignUpDto {
	@IsNotEmpty()
	@IsString()
	username: string;

	@IsNotEmpty()
	@IsString()
	password: string;

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
	@Matches(/^\d+$/, { message: 'กรุณากรอกเบอร์โทรที่ถูกต้อง' })
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
