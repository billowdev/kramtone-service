import { Optional } from "sequelize";

export type CategoryAttributes = {
	declare id: number;
	declare name: string;
	declare desc: string;
	declare image: string;
	declare createdAt: Date;
	declare updatedAt: Date;
}

export type CategoryCreationAttributes =
	Optional<
		CategoryAttributes,
		'id' | 'createdAt' | 'updatedAt'
	>;
