import { Optional } from "sequelize";

export type GroupColorSchemeAttributes = {
	declare id: string
	declare groupId: string
	declare colorSchemeId: string;
}

export type GroupColorSchemeCreationAttributes =
	Optional<
		GroupColorSchemeAttributes,
		'createdAt',
		'updatedAt'
	>;
