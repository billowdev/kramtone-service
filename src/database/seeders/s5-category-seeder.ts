'use strict';
import { QueryInterface } from "sequelize";
type CategoryType = {
	id: string,
	name: string,
	desc: string,
	image: string,
	created_at: Date,
	updated_at: Date
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const categoryData: Array<CategoryType> = [
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a0",
				name: "ไม่มีหมวดหมู่",
				desc: "ไม่มีหมวดหมู่",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				name: "สินค้าเบ็ดเตล็ด",
				desc: "สินค้าเบ็ดเตล็ด",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				name: "ผ้าพันคอ",
				desc: "ผ้าพันคอ",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				name: "ผ้าคลุมไหล่",
				desc: "ผ้าคลุมไหล่",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a5",
				name: "ผ้าถุง",
				desc: "ผ้าถุง",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a6",
				name: "ผ้ายกม้วน",
				desc: "ผ้ายกม้วน",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a7",
				name: "ผ้าผืน/ผ้าเมตร",
				desc: "ผ้าผืน/ผ้าเมตร",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a8",
				name: "ผ้าตัดชุด",
				desc: "ผ้าตัดชุด",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a9",
				name: "เสื้อผ้าคราม",
				desc: "เสื้อผ้าคราม",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e012a2",
				name: "รองเท้าผ้าคราม",
				desc: "รองเท้าผ้าคราม",
				image: "default_image.png",
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
