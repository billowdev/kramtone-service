import { Optional } from "sequelize";

export type AddressAttributes = {
	declare id: string,

	declare createdAt: Date,
	declare updatedAt: Date
}

export type AddressCreationAttributes =
	Optional<
		AddressAttributes,
		'id' | 'createdAt' | 'updatedAt' | 'lane' | 'road'
	>;
