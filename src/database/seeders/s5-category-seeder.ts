'use strict';
import { QueryInterface } from "sequelize";
type CategoryType = {
	id: string,
	name: string,
	desc: string,
	image: string,
	is_default: boolean;
	group_id: string;
	created_at: Date,
	updated_at: Date
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const categoryData: Array<CategoryType> = [
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				name: "ผ้าพันคอ",
				desc: "ผ้าคลุมไหล่ย้อมคราม",
				image: "default_image.png",
				is_default: true,
				group_id: null,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				name: "ผ้าคลุมไหล่ย้อมคราม",
				desc: "ผ้าคลุมไหล่ย้อมคราม",
				image: "default_image.png",
				is_default: true,
				group_id: null,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				name: "เสื้อย้อมคราม",
				desc: "เสื้อย้อมคราม",
				image: "default_image.png",
				is_default: true,
				group_id: null,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				name: "ผ้าซิ่นย้อมคราม",
				desc: "ผ้าซิ่นย้อมคราม",
				image: "default_image.png",
				is_default: true,
				group_id: null,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]

		return queryInterface.bulkInsert('category', categoryData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('category', null, {})
	}
};
