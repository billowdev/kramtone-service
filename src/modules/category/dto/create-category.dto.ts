import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateCategoryDto {
	@IsString()
	@IsNotEmpty()
	name: string
	
	@IsString()
	@IsOptional()
	desc?: string

	@IsString()
	@IsOptional()
	image?: string;
}
