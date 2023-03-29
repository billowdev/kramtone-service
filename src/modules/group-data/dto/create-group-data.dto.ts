import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { GroupTypeEnum } from '../types/group-data.types.enum';

export class CreateGroupDto {
	@IsString()
	@IsNotEmpty()
	groupName: string;

	@IsEnum(GroupTypeEnum)
	@IsNotEmpty()
	groupType: GroupTypeEnum;

	@IsString()
	@IsNotEmpty()
	agency: string;

	@IsString()
	@IsNotEmpty()
	phone: string;

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
