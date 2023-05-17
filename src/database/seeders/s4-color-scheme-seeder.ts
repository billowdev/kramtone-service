'use strict';
import { QueryInterface } from "sequelize";
type ColorSchemeType = {
	id: string
	name_en: string;
	name_th: string;
	hex: string;
}

module.exports = {
	up: async (queryInterface: QueryInterface) => {

		const colorSchemeData: Array<ColorSchemeType> = [
			{ id: "SK1-60", name_en: "Light Blue", name_th: "ฟ้าอ่อน", hex: "#78BAC6", },
			
			// { id: "SK1-97", name_en: "Light Blue", name_th: "ฟ้าอ่อน", hex: "#6BA4B8", },
			{ id: "SK1-65", name_en: "Light Blue", name_th: "ฟ้าอ่อน", hex: "#8FB8CA", },
			{ id: "SK1-80", name_en: "Light Blue", name_th: "ฟ้าอ่อน", hex: "#74A9BB", },
			{ id: "SK1-116", name_en: "Light Blue", name_th: "ฟ้าอ่อน", hex: "#7BA4B8", },

			{ id: "SK2-39", name_en: "Medium Blue", name_th: "ฟ้า", hex: "#64B2E3", },

			{ id: "SK3-45", name_en: "Strong Blue", name_th: "น้ำเงิน", hex: "#35689F", },
			{ id: "SK3-22", name_en: "Strong Blue", name_th: "น้ำเงิน", hex: "#345E90", },
			{ id: "SK3-32", name_en: "Strong Blue", name_th: "น้ำเงิน", hex: "#2B569A", },
			{ id: "SK3-20", name_en: "Strong Blue", name_th: "น้ำเงิน", hex: "#103D81", },
			{ id: "SK3-49", name_en: "Strong Blue", name_th: "น้ำเงิน", hex: "#1D5884", },

			{ id: "SK4-43", name_en: "Grayish Blue", name_th: "น้ำเงินอมเทา", hex: "#6B85A6", },
			{ id: "SK4-28", name_en: "Grayish Blue", name_th: "น้ำเงินอมเทา", hex: "#5B7B92", },
			{ id: "SK4-1", name_en: "Grayish Blue", name_th: "น้ำเงินอมเทา", hex: "#2D496E", },
			{ id: "SK4-2", name_en: "Grayish Blue", name_th: "น้ำเงินอมเทา", hex: "#274260", },
			{ id: "SK4-27", name_en: "Grayish Blue", name_th: "น้ำเงินอมเทา", hex: "#35617A", },
			
			{ id: "SK5-8", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#353F63", },
			{ id: "SK5-10", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#2B324F", },
			{ id: "SK5-37", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#173559", },
			{ id: "SK5-98", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#012B5D", },
			{ id: "SK5-5", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#091C47", },
			
			{ id: "SK6-6", name_en: "Dark Blue", name_th: "น้ำเงินเข้มาก", hex: "#000C15", },
			{ id: "SK6-7", name_en: "Dark Blue", name_th: "น้ำเงินเข้มาก", hex: "#0D0A29", },
			{ id: "SK6-4", name_en: "Dark Blue", name_th: "น้ำเงินเข้มาก", hex: "#041531", },
			{ id: "SK5-15", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#040E43", },
			{ id: "SK5-16", name_en: "Deep Blue", name_th: "น้ำเงินเข้ม", hex: "#0F1F53", },
			
		]

		return queryInterface.bulkInsert('color_scheme', colorSchemeData)
	},

	down: async (queryInterface: QueryInterface) => {
		return queryInterface.bulkDelete('color_scheme', null, {})
	}
};