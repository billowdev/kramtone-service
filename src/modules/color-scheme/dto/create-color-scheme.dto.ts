import { IsNotEmpty, IsString, IsUppercase } from "class-validator";

export class CreateColorSchemeDto {
	@IsString()
	@IsNotEmpty()
	@IsUppercase()
	readonly id: string;

	@IsString()
	@IsNotEmpty()
	readonly cname: string;

	@IsString()
	@IsNotEmpty()
	readonly cnameth: string;

	@IsString()
	@IsNotEmpty()
	readonly hex: string;

	@IsString()
	@IsNotEmpty()
	readonly red: string;

	@IsString()
	@IsNotEmpty()
	readonly green: string;

	@IsString()
	@IsNotEmpty()
	readonly blue: string;
}
export type BulkCreateColorSchemeDto = CreateColorSchemeDto[]