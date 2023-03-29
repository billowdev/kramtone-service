import { Optional } from "sequelize";

export type CategoryAttributes = {
	declare id: string;
	declare name: string;
	declare desc: string;
	declare image: string;
	declare groupId: string;
	declare isDefault: boolean;
	declare createdAt: Date;
	declare updatedAt: Date;
}

export type CategoryCreationAttributes =
	Optional<
		CategoryAttributes,
		'id' | 'createdAt' | 'updatedAt'
	>;
