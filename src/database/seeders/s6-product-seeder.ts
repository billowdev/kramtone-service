'use strict';
import { QueryInterface } from "sequelize";
type ProductType = {
	id: string,
	name: string;
	desc: string;
	price: number;
	reload_count: number;
	group_id: string;
	category_id: string;
	color_scheme_id: string;
	created_at: Date,
	updated_at: Date

}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const productData: Array<ProductType> = [
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				name: "ผ้าพันคอ 1",
				desc: "ผ้าคราม 1",
				price: 200,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				color_scheme_id: "SK1-60",
				reload_count: 230,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				name: "ผ้าพันคอ 2",
				desc: "ผ้าคราม 2",
				price: 200,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				color_scheme_id: "SK1-60",
				reload_count: 553,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				name: "ผ้าพันคอ 2",
				desc: "ผ้าคราม 2",
				price: 200,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				color_scheme_id: "SK1-60",
				reload_count: 553,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				name: "ผ้าพันคอ 2",
				desc: "ผ้าคราม 2",
				price: 200,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				color_scheme_id: "SK1-60",
				reload_count: 553,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]

		return queryInterface.bulkInsert('product', productData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('product', null, {})
	}
};
