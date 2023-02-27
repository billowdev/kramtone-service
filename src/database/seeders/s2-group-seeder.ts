'use strict';
import { QueryInterface } from "sequelize";
import { GroupTypeEnum } from "src/modules/group/types/group-type.enum";
type GroupType = {
	id: string,
	group_name: string,
	group_type: GroupTypeEnum,
	agency: string,
	phone: string,
	email: string,
	logo: string,
	banner: string,
	verified: boolean,
	address_id: string,
	created_at: Date,
	updated_at: Date
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const groupData: Array<GroupType> = [
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				group_name: "Shop name",
				group_type: GroupTypeEnum.SHOP,
				agency: "9 A",
				phone: "0987654321",
				email: "email@gmail.com",
				logo: "default_image.png",
				banner: "default_image.png",
				verified: true,
				address_id: "11b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				group_name: "Shop name",
				group_type: GroupTypeEnum.SHOP,
				agency: "9 A",
				phone: "0987654321",
				email: "email1@gmail.com",
				logo: "default_image.png",
				banner: "default_image.png",
				verified: false,
				address_id: "11b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				created_at: new Date(),
				updated_at: new Date(),
			}
		]

		return queryInterface.bulkInsert('group', groupData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('group', null, {})
	}
};
