import { Optional } from "sequelize";
import { declare } from './../../../../dist/database/database.providers.d';

export type ProductAttributes = {
	declare id: string
	declare name: string;
	declare desc: string;
	declare price: number;
	declare reloadCount: number;
	declare groupId: string;
	declare publish: boolean;
	declare recommend: boolean;
	declare categoryId: number;
	declare createdAt: Date;
	declare updatedAt: Date;

}

export type ProductCreationAttributes =
	Optional<
		ProductAttributes,
		'id' | 'createdAt' | 'updatedAt'
	>;