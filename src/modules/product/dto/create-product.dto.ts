import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
	// @ApiProperty({
	// 	description: "Name for product",
	// 	example: "ผ้าพันคอ"
	// })
	// @IsString()
	// @IsNotEmpty()
	// declare name: string;

	// @ApiProperty({
	// 	description: "The description for product",
	// 	example: "ผ้าครามโทนสี SK1-60"
	// })
	// @IsString()
	// @IsOptional()
	// declare desc: string;

	// @ApiProperty({
	// 	description: "The price of product",
	// 	example: 200
	// })
	// @IsNumber()
	// @IsNotEmpty()
	// declare price: number

	// @ApiProperty({
	// 	description: "The owner of product",
	// 	example: "41b4f7c2-b221-4a6b-a0e3-d7ec80e011a1"
	// })
	// @IsString()
	// @IsNotEmpty()
	// declare userId: string;

	// @ApiProperty({
	// 	description: "The category ID for product",
	// 	example: 1
	// })
	// @IsNumber()
	// @IsNotEmpty()
	// declare categoryId: number;
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	desc: string;

	@IsString()
	@IsNotEmpty()
	price: number;

	
	@IsOptional()
	images?: any;

	@IsBoolean()
	publish: boolean;
	
	@IsBoolean()
	recommend: boolean;

	@IsString()
	@IsOptional()
	colorSchemeId?: string;

	@IsString()
	@IsOptional()
	categoryId?: string;

}

