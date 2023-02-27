'use strict';
import { QueryInterface } from "sequelize";
type ProductImageType = {
	id: string,
	image: string;
	product_id: string;
	created_at: Date,
	updated_at: Date

}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const productImageData: Array<ProductImageType> = [
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				created_at: new Date(),
				updated_at: new Date(),
			},
		]

		return queryInterface.bulkInsert('product_image', productImageData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('product_image', null, {})
	}
};
