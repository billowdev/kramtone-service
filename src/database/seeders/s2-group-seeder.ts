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
				group_name: "กลุ่มทอผ้าย้อมคราม",
				group_type: GroupTypeEnum.PRODUCER,
				agency: "นางบุญมี ไขลายหงษ์",
				phone: "0987654321",
				email: "-",
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
				zip_code: "47000",
				lat: "17.118243263837396",
				lng: "104.26104240488861",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				group_name: "หัตถศิลป์ครามทอง",
				group_type: GroupTypeEnum.PRODUCER,
				agency: "นางอมรรัตน์ นิยมค้า",
				phone: "-",
				email: "-",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "-",
				village: "-",
				lane: "-",
				road: "ถนนสุขเกษม",
				subdistrict: "ธาตุเชิงชุม",
				district: "เมืองสกลนคร",
				province: "สกลนคร",
				zip_code: "47000",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				group_name: "ซิ่นงาม ครามสวย",
				group_type: GroupTypeEnum.SHOP,
				agency: "นางสุรัชฎา ปุนริบูรณ์",
				phone: "-",
				email: "-",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "194",
				village: "-",
				lane: "-",
				road: "-",
				subdistrict: "ธาตุเชิงชุม",
				district: "เมืองสกลนคร",
				province: "สกลนคร",
				zip_code: "47000",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a4",
				group_name: "สุข-ชม",
				group_type: GroupTypeEnum.SHOP,
				agency: "นางกุลธิดา อุปพงษ์",
				phone: "-",
				email: "-",
				logo: "logo.png",
				banner: "banner.png",
				verified: true,
				hno: "405/2",
				village: "-",
				lane: "-",
				road: "-",
				subdistrict: "ธาตุเชิงชุม",
				district: "เมืองสกลนคร",
				province: "สกลนคร",
				zip_code: "47000",
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
