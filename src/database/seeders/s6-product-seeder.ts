'use strict';
import { QueryInterface } from "sequelize";
type ProductType = {
	id: string,
	name: string;
	desc: string;
	price: number;
	user_id: string;
	category_id: number;
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
				user_id: "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				category_id: 1,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				name: "ผ้าพันคอ 2",
				desc: "ผ้าคราม 2",
				price: 200,
				user_id: "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				category_id: 1,
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
