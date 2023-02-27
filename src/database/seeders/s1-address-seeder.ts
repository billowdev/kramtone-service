'use strict';
import { QueryInterface } from "sequelize";
type AddressType = {
	id: string,
	house_no: string, // บ้านเลขที่
	village_no: string, // หมู่
	village: string, // หมู่บ้าน
	lane?: string, // ซอย
	road?: string, // ถนน
	sub_district: string, // ตำบล
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

		const AddressData: Array<AddressType> = [
			{
				id: "11b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
				house_no: "111",
				village_no: "9",
				village: "ผ้าคราม",
				lane: "ซอยผ้าคราม",
				road: "ถนนผ้าคราม",
				sub_district: "ตำบลผ้าคราม",
				district: "อำเภอผ้าคราม",
				province: "จังหวัดผ้าคราม",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "11b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				house_no: "222",
				village_no: "2",
				village: "ผ้าคราม 2",
				lane: "ซอยผ้าคราม 2",
				road: "ถนนผ้าคราม 2",
				sub_district: "ตำบลผ้าคราม 2",
				district: "อำเภอผ้าคราม 2",
				province: "จังหวัดผ้าคราม 2",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				id: "11b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
				house_no: "333",
				village_no: "3",
				village: "ผ้าคราม 3",
				lane: "ซอยผ้าคราม 3",
				road: "ถนนผ้าคราม 3",
				sub_district: "ตำบลผ้าคราม 3",
				district: "อำเภอผ้าคราม 3",
				province: "จังหวัดผ้าคราม 3",
				zip_code: "44499",
				lat: "17.191668672743997",
				lng: "104.09524272401283",
				created_at: new Date(),
				updated_at: new Date(),
			},

		]

		return queryInterface.bulkInsert('address', AddressData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('address', null, {})
	}
};
