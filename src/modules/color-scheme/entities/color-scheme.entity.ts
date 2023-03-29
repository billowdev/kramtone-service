import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ColorSchemeAttributes, ColorSchemeCreationAttributes } from "../types/color-scheme-entity.types";
import { GroupDataEntity } from './../../group-data/entities/group-data.entity';
import { GroupColorSchemeEntity } from "./group-color-scheme.entity";

@Table({
	tableName: 'color_scheme',
	underscored: true,
	timestamps: false,
	freezeTableName: true
})
export class ColorSchemeEntity extends Model<ColorSchemeAttributes, ColorSchemeCreationAttributes> {
	@ApiProperty({
		description: 'The primary key as indigo tone id',
		example: 'SK1-60',
		uniqueItems: true,
		nullable: false
	})
	@Column({
		type: DataType.STRING(8),
		primaryKey: true,
		unique: true,
	})
	declare id: string

	@ApiProperty({
		description: 'English name of color',
		example: 'Light Blue',
		maxLength: 20,
		nullable: false
	})
	@Column({
		type: DataType.STRING(20),
		field: "name_en",
		allowNull: false,
	})
	declare nameEN: string

	@ApiProperty({
		description: 'Thai name of color',
		example: 'ฟ้าอ่อน',
		maxLength: 20,
		nullable: false
	})
	@Column({
		type: DataType.STRING(20),
		field: "name_th",
		allowNull: false,
	})
	declare nameTH: string

	@ApiProperty({
		description: 'hex of color',
		example: '#78BAC6',
		uniqueItems: true,
		maxLength: 10,
		nullable: false
	})
	@Column({
		type: DataType.STRING(10),
		unique: true,
		allowNull: false,
	})
	declare hex: string


	@BelongsToMany(() => GroupDataEntity, () => GroupColorSchemeEntity)
	groups: GroupDataEntity[];

}
