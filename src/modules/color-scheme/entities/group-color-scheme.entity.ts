import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ColorSchemeAttributes, ColorSchemeCreationAttributes } from "../types/color-scheme-entity.types";
import { GroupColorSchemeAttributes } from "../types/group-color-scheme.types";
import { GroupEntity } from './../../group/entities/group.entity';
import { ColorSchemeEntity } from './color-scheme.entity';

@Table({
	tableName: 'group_color_scheme',
	underscored: true,
	timestamps: true,
	freezeTableName: true
})
export class GroupColorSchemeEntity extends Model<GroupColorSchemeAttributes> {

	@ForeignKey(()=> GroupEntity)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	groupId: string

	@ForeignKey(()=> ColorSchemeEntity)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	colorSchemeId: string

}
