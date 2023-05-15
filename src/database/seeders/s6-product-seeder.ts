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
	recommend : boolean;
	publish : boolean;
	color_scheme_id: string;
	created_at: Date,
	updated_at: Date

}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const productData: Array<ProductType> = [
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				name: "ผ้าพันคอ",
				desc: "ผ้าพันคอ",
				price: 699,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				color_scheme_id: "SK1-60",
				reload_count: 230,
				recommend : true,
				publish : true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				name: "ผ้าถุง",
				desc: "ผ้าถุง",
				price: 699,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				color_scheme_id: "SK1-80",
				reload_count: 553,
				recommend : true,
				publish : true,

				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				name: "ผ้าคลุมไหล่",
				desc: "ผ้าคลุมไหล่",
				price: 699,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				color_scheme_id: "SK1-60",
				reload_count: 553,
				recommend : true,
				publish : true,

				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				name: "เสื้อผ้าคราม",
				desc: "เสื้อผ้าคราม",
				price: 699,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
				color_scheme_id: "SK3-45",
				reload_count: 553,
				recommend : true,
				publish : true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
				name: "เครื่องประดับ",
				desc: "เครื่องประดับ",
				price: 250,
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				category_id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				color_scheme_id: "SK3-22",
				reload_count: 553,
				recommend : true,
				publish : true,
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
