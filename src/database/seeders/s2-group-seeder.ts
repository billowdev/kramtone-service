'use strict';
import { QueryInterface } from "sequelize";
import { GroupTypeEnum } from "../../modules/group-data/types/group-data.types.enum";
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
	hno: string, // บ้านเลขที่
	village: string, // หมู่บ้าน
	lane?: string, // ซอย
	road?: string, // ถนน
	subdistrict: string, // ตำบล
	district: string, // อำเภอ
	province: string, // จังหวัด
	zip_code: string,// รหัสไปรษณีย์
	lat?: string, // ละติจูด
	lng?: string, // ลองจิจูด
	created_at: Date,
	updated_at: Date
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const groupData: Array<GroupType> = [
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				group_name: "หัตถศิลป์ครามทอง",
				group_type: GroupTypeEnum.PRODUCER,
				agency: "นางบุญมี ไขลายหงษ์",
				phone: "0987654321",
				email: "email@gmail.com",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "44/7",
				village: "-",
				lane: "-",
				road: "-",
				subdistrict: "ม่วงลาย",
				district: "เมืองสกลนคร",
				province: "สกลนคร",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				group_name: "Shop name 2",
				group_type: GroupTypeEnum.SHOP,
				agency: "9 A",
				phone: "0987654321",
				email: "email1@gmail.com",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "333",
				village: "-",
				lane: "- 3",
				road: "- 3",
				subdistrict: "ตำบลผ้าคราม",
				district: "เมืองสกลนคร",
				province: "สกลนคร",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				group_name: "Shop name 3",
				group_type: GroupTypeEnum.SHOP,
				agency: "9 A2",
				phone: "0987654321",
				email: "email1@gmail.com",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "333",
				village: "ผ้าคราม 3",
				lane: "- 3",
				road: "- 3",
				subdistrict: "ตำบลผ้าคราม 3",
				district: "เมืองสกลนคร 3",
				province: "สกลนคร 3",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				group_name: "Shop name 4",
				group_type: GroupTypeEnum.SHOP,
				agency: "9 A",
				phone: "0987654321",
				email: "email1@gmail.com",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "333",
				village: "ผ้าคราม 3",
				lane: "- 3",
				road: "- 3",
				subdistrict: "ตำบลผ้าคราม 3",
				district: "เมืองสกลนคร 3",
				province: "สกลนคร 3",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},


			
		]

		return queryInterface.bulkInsert('group_data', groupData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('group_data', null, {})
	}
};
