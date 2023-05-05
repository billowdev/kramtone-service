'use strict';
import { QueryInterface } from "sequelize";
type GroupColorSchemeType = {
	id: string,
	group_id: string,
	color_scheme_id: string,
	created_at: Date,
	updated_at: Date
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const groupColorSchemeData: Array<GroupColorSchemeType> = [
			{
				id: "81b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				color_scheme_id: "SK4-1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "81b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				group_id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				color_scheme_id: "SK4-2",
				created_at: new Date(),
				updated_at: new Date(),
			},
		]

		return queryInterface.bulkInsert('group_color_scheme', groupColorSchemeData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('group_color_scheme', null, {})
	}
};
