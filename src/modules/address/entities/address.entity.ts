import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { GroupEntity } from "../../../modules/group/entities/group.entity";
// import { AdminEntity } from "../../../modules/admin/entities/admin.entity";
// import { UserEntity } from "../../../modules/user/entities/user.entity";
import { AddressAttributes, AddressCreationAttributes } from "../types/address-entity.types";

@Table({
	tableName: 'address',
	underscored: true,
	freezeTableName: true
})
export class AddressEntity extends Model<AddressAttributes, AddressCreationAttributes> {
	@ApiProperty({
		description: 'The Primary key as Address ID',
		example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1',
		uniqueItems: true,
		nullable: false
	})
	@Column({
		type: DataType.UUID,
		defaultValue: UUIDV4,
		primaryKey: true,

	})
	declare id: string



	@ApiProperty({
		description: 'When address was created',
		nullable: false,
		format: Date(),
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "created_at",
		defaultValue: new Date()
	})
	declare createdAt: Date

	@ApiProperty({
		description: 'When address was updated',
		nullable: false,
		format: Date(),
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "updated_at",
		defaultValue: new Date()
	})
	declare updatedAt: Date


	@HasMany(() => GroupEntity)
	declare groups: GroupEntity[]

	// @HasMany(() => AdminEntity)
	// declare admins: AdminEntity[]

}

