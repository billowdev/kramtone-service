import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { GroupColorSchemeAttributes } from "../types/group-color-scheme.types";
import { GroupDataEntity } from './../../group-data/entities/group-data.entity';
import { ColorSchemeEntity } from './color-scheme.entity';

@Table({
	tableName: 'group_color_scheme',
	underscored: true,
	timestamps: true,
	freezeTableName: true
})
export class GroupColorSchemeEntity extends Model<GroupColorSchemeAttributes> {

	@ForeignKey(()=> GroupDataEntity)
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
