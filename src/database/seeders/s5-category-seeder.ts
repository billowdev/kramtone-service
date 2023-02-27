'use strict';
import { QueryInterface } from "sequelize";
type CategoryType = {
	id: number,
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
				id: 1,
				name: "category 1",
				desc: "category 1",
				image: "default_image.png",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: 2,
				name: "category 2",
				desc: "category 2",
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
