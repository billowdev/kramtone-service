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
				name: "category 1",
				desc: "category 1",
				image: "default_image.png",
				is_default: true,
				group_id: null,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				name: "category 2",
				desc: "category 2",
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
