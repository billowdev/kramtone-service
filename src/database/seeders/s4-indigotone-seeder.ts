'use strict';
import { QueryInterface } from "sequelize";
type IndigotoneType = {
	id: string
	cname: string;
	cnameth: string;
	hex: string;
	red: string;
	green: string;
	blue: string;
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const indigotoneData: Array<IndigotoneType> = [
			{ id: "SK1-60", cname: "Light Blue", cnameth: "ฟ้าอ่อน", hex: "#78BAC6", red: "120", green: "186", blue: "198" },
			{ id: "SK1-97", cname: "Light Blue", cnameth: "ฟ้าอ่อน", hex: "#6BA4B8", red: "107", green: "164", blue: "184" },
			{ id: "SK1-85", cname: "Light Blue", cnameth: "ฟ้าอ่อน", hex: "#74ADC8", red: "116", green: "173", blue: "200" },
			{ id: "SK1-80", cname: "Light Blue", cnameth: "ฟ้าอ่อน", hex: "#74A9BB", red: "116", green: "169", blue: "187" },
			{ id: "SK1-65", cname: "Light Blue", cnameth: "ฟ้าอ่อน", hex: "#8FB8CA", red: "143", green: "184", blue: "202" },
			{ id: "SK1-116", cname: "Light Blue", cnameth: "ฟ้าอ่อน", hex: "#7BA4B8", red: "123", green: "164", blue: "184" },
			{ id: "SK2-39", cname: "Medium Blue", cnameth: "ฟ้า", hex: "#64B2E3", red: "100", green: "178", blue: "227" },
			{ id: "SK3-49", cname: "Strong Blue", cnameth: "น้ำเงิน", hex: "#1D5884", red: "29", green: "88", blue: "132" },
			{ id: "SK3-45", cname: "Strong Blue", cnameth: "น้ำเงิน", hex: "#35689F", red: "53", green: "104", blue: "159" },
			{ id: "SK3-22", cname: "Strong Blue", cnameth: "น้ำเงิน", hex: "#345E90", red: "52", green: "94", blue: "144" },
			{ id: "SK3-32", cname: "Strong Blue", cnameth: "น้ำเงิน", hex: "#2B569A", red: "43", green: "86", blue: "154" },
			{ id: "SK3-20", cname: "Strong Blue", cnameth: "น้ำเงิน", hex: "#103D81", red: "16", green: "61", blue: "129" },
			{ id: "SK4-43", cname: "Grayish Blue", cnameth: "น้ำเงินอมเทา", hex: "#6B85A6", red: "107", green: "133", blue: "166" },
			{ id: "SK4-28", cname: "Grayish Blue", cnameth: "น้ำเงินอมเทา", hex: "#5B7B92", red: "91", green: "123", blue: "146" },
			{ id: "SK4-27", cname: "Grayish Blue", cnameth: "น้ำเงินอมเทา", hex: "#35617A", red: "53", green: "97", blue: "122" },
			{ id: "SK4-1", cname: "Grayish Blue", cnameth: "น้ำเงินอมเทา", hex: "#2D496E", red: "45", green: "73", blue: "110" },
			{ id: "SK4-2", cname: "Grayish Blue", cnameth: "น้ำเงินอมเทา", hex: "#274260", red: "39", green: "66", blue: "96" },
			{ id: "SK5-37", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#173559", red: "23", green: "53", blue: "89" },
			{ id: "SK5-98", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#012B5D", red: "1", green: "43", blue: "93" },
			{ id: "SK5-51", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#032352", red: "3", green: "35", blue: "82" },
			{ id: "SK5-13", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#061D49", red: "6", green: "29", blue: "73" },
			{ id: "SK5-5", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#091C47", red: "9", green: "28", blue: "71" },
			{ id: "SK5-16", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#0F1F53", red: "15", green: "31", blue: "83" },
			{ id: "SK5-15", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#040E43", red: "4", green: "14", blue: "67" },
			{ id: "SK5-108", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#001F58", red: "0", green: "31", blue: "88" },
			{ id: "SK6-4", cname: "Dark Blue", cnameth: "น้ำเงินเข้มาก", hex: "#041531", red: "4", green: "21", blue: "49" },
			{ id: "SK6-6", cname: "Dark Blue", cnameth: "น้ำเงินเข้มาก", hex: "#000C15", red: "0", green: "12", blue: "21" },
			{ id: "SK6-7", cname: "Dark Blue", cnameth: "น้ำเงินเข้มาก", hex: "#0D0A29", red: "13", green: "10", blue: "41" },
			{ id: "SK5-8", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#353F63", red: "53", green: "63", blue: "99" },
			{ id: "SK5-10", cname: "Deep Blue", cnameth: "น้ำเงินเข้ม", hex: "#2B324F", red: "43", green: "50", blue: "79" },
		]

		return queryInterface.bulkInsert('indigotone', indigotoneData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('indigotone', null, {})
	}
};