import { IsNotEmpty, IsString, IsUppercase } from "class-validator";

export class CreateColorSchemeDto {
	@IsString()
	@IsNotEmpty()
	@IsUppercase()
	readonly id: string;

	@IsString()
	@IsNotEmpty()
	readonly nameTH: string;

	@IsString()
	@IsNotEmpty()
	readonly nameEN: string;

	@IsString()
	@IsNotEmpty()
	readonly hex: string;
}
export type BulkCreateColorSchemeDto = CreateColorSchemeDto[]