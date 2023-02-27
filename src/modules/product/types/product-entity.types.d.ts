import { Optional } from "sequelize";

export type ProductAttributes = {
	declare id: string
	declare name: string;
	declare desc: string;
	declare price: number;
	declare userId: string;
	declare categoryId: number;
	declare createdAt: Date;
	declare updatedAt: Date;

}

export type ProductCreationAttributes =
	Optional<
		ProductAttributes,
		'id' | 'createdAt' | 'updatedAt'
	>;