import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AddressEntity } from '../entities/address.entity'
export class CreateAddressDto extends PartialType(AddressEntity) {
	@IsString()
	@IsNotEmpty()
	houseNo: string;

	@IsString()
	@IsNotEmpty()
	villageNo: string;

	@IsString()
	@IsNotEmpty()
	village: string;

	@IsString()
	@IsOptional()
	lane?: string;

	@IsString()
	@IsOptional()
	road?: string;

	@IsString()
	@IsNotEmpty()
	subDistrict: string;

	@IsString()
	@IsNotEmpty()
	district: string;

	@IsString()
	@IsNotEmpty()
	province: string;

	@IsString()
	@IsNotEmpty()
	zipCode: string;

	@IsString()
	@IsOptional()
	lat?: string;

	@IsOptional()
	lng?: string;
}
