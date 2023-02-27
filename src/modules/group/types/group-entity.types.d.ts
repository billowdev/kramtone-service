import { Optional } from "@nestjs/common";

export type GroupAttributes = {
	declare id: string,
	declare groupName : string,
	declare groupType : GroupTypeEnum,
	declare agency : string,
	declare phone : string,
	declare email : string,
	declare logo : string,
	declare banner : string,
	declare verified : boolean,
	declare hno: string, // บ้านเลขที่ หมู่
	declare village?: string, // บ้านเลขที่ หมู่
	declare lane?: string, // บ้านเลขที่ หมู่
	declare road?: string, // ถนน
	declare subDistrict: string, // ตำบล
	declare district: string, // อำเภอ
	declare province: string, // จังหวัด
	declare zipCode: string,// รหัสไปรษณีย์
	declare lat?: string, // ละติจูด
	declare lng?: string, // ลองจิจูด
	declare createdAt: Date,
	declare updatedAt: Date
}
export type GroupCreationAttributes = Optional<GroupAttributes, 'id' | 'createdAt' | 'updatedAt'>;
