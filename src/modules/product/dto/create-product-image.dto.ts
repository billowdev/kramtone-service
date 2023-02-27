import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateProductImageDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	image: string

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	productId: string
}
