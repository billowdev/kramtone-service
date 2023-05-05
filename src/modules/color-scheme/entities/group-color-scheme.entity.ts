import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { GroupColorSchemeAttributes } from "../types/group-color-scheme.types";
import { GroupDataEntity } from './../../group-data/entities/group-data.entity';
import { ColorSchemeEntity } from './color-scheme.entity';
import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";

@Table({
	tableName: 'group_color_scheme',
	underscored: true,
	timestamps: true,
	freezeTableName: true
})
export class GroupColorSchemeEntity extends Model<GroupColorSchemeAttributes> {

	@ApiProperty({
		description: 'Primary key as Group Color Scheme ID',
		example: '51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1',
		uniqueItems: true,
		nullable: false
	})
	@Column({
		type: DataType.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,
	})
	declare id: string

	@BelongsTo(()=> GroupDataEntity, {onDelete: 'casCade'})
	group: GroupDataEntity
	@ForeignKey(()=> GroupDataEntity)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	groupId: string

	@BelongsTo(()=> ColorSchemeEntity, {onDelete: 'casCade'})
	colorScheme: ColorSchemeEntity
	@ForeignKey(()=> ColorSchemeEntity)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	colorSchemeId: string

}
