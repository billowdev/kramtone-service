import { Optional } from "sequelize";

export type ProductImageAttributes = {
	declare id: string
	declare image: string;
	declare productId: string;
	declare createdAt: Date;
	declare updatedAt: Date;

}

export type ProductImageCreationAttributes =
	Optional<
		ProductImageAttributes,
		'id' | 'createdAt' | 'updatedAt'
	>;
