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
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a6",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a7",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a8",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a6",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a7",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec81e011a0",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a8",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a1",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a2",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a3",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a2",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a4",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a3",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a5",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a4",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a6",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a5",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a7",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a5",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a8",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a6",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e010a9",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a7",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e012a1",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a8",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "71b4f7c2-b221-4a6b-a0e3-d7ec80e012a2",
				image: "default_image.png",
				product_id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e010a9",
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
