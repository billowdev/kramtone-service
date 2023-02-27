import { Optional } from "sequelize";

export type ColorSchemeAttributes = {
	declare id: string
	declare nameEN: string;
	declare nameTH: string;
	declare hex: string;
}

export type ColorSchemeCreationAttributes =
	Optional<
		ColorSchemeAttributes,
		'id' 
	>;
