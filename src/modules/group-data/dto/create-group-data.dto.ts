import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GroupTypeEnum } from '../types/group-data.types.enum';

export class CreateGroupDto {
	@IsString()
	@IsOptional()
	groupName?: string;

	@IsEnum(GroupTypeEnum)
	@IsOptional()
	groupType?: GroupTypeEnum;

	@IsString()
	@IsOptional()
	agency?: string;

	@IsString()
	@IsOptional()
	phone?: string;

	@IsString()
	@IsOptional()
	email?: string;

	@IsString()
	@IsOptional()
	logo?: string;

	@IsString()
	@IsOptional()
	banner?: string;

	@IsString()
	@IsOptional()
	hno?: string


	@IsString()
	@IsOptional()
	village?: string


	@IsString()
	@IsOptional()
	lane?: string

	@IsString()
	@IsOptional()
	road?: string

	@IsString()
	@IsOptional()
	subdistrict?: string

	@IsString()
	@IsOptional()
	district?: string

	@IsString()
	@IsOptional()
	province?: string

	@IsString()
	@IsOptional()
	zipCode?: string

	@IsString()
	@IsOptional()
	lat?: string

	@IsString()
	@IsOptional()
	lng?: string


	@IsBoolean()
	@IsOptional()
	verified?: boolean;
}
