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
	addressId?: string;

	@IsBoolean()
	@IsOptional()
	verified?: boolean;
}
