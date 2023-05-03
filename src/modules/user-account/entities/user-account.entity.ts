import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { UserAttributes, UserCreationAttributes } from "../types/user-account-entity.types";
import { Column, DataType, Table, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Role } from "../types/role.enum";
import { GroupDataEntity } from './../../group-data/entities/group-data.entity';

@Table({
	tableName: 'user',
	underscored: true,
	freezeTableName: true
})
export class UserEntity extends Model<UserAttributes, UserCreationAttributes> {
	@ApiProperty({
		description: 'Primary key as User ID',
		example: '41b4f7c2-b221-4a6b-a0e3-d7ec80e011a1',
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
		description: 'The username of user',
		example: 'billowdev',
		uniqueItems: true,
		maxLength: 64,
		nullable: false
	})
	@Column({
		type: DataType.STRING(64),
		unique: true,
		allowNull: false,
	})
	declare username: string;

		@ApiProperty({
		description: 'The hashed password of user',
		example: 'passwordhashing',
		maxLength: 128,
		nullable: false
	})
	@Column({
		type: DataType.STRING(128),
		allowNull: false,
		field: 'hash_password'
	})
	declare hashPassword: string;

	@ApiProperty({
		description: 'The email of user',
		example: 'example@billowdev.com',
		nullable: false,
		maxLength: 120,
		uniqueItems: true
	})
	@Column({
		type: DataType.STRING(120),
		unique: true,
		allowNull: true,
	})
	declare email: string;

	@ApiProperty({
		description: 'Role of user',
		nullable: false,
		enum: Role,
		default: Role.MEMBER
	})
	@Column({
		type: DataType.ENUM({
			values: [Role.MEMBER, Role.ADMIN]
		}),
		defaultValue: Role.MEMBER
	})
	declare role: Role;

	@ApiProperty({
		description: 'name',
		example: 'name',
		nullable: false,
		maxLength: 80
	})
	@Column({
		type: DataType.STRING(80),
		allowNull: false,
		field: 'name'
	})
	declare name: string;

	@ApiProperty({
		description: 'surname',
		example: 'surname',
		nullable: false,
		maxLength: 80
	})
	@Column({
		type: DataType.STRING(80),
		allowNull: false,
		field: 'surname'
	})
	declare surname: string;

	@ApiProperty({
		description: 'The phone number',
		example: '0987654321',
		nullable: true,
		maxLength: 10
	})
	@Column({
		type: DataType.STRING(10),
	})
	declare phone: string;


	@ApiProperty({
		description: 'The status of user',
		default: true,
		example: true
	})
	@Column({
		type: DataType.BOOLEAN,
		field: 'activated',
		defaultValue: false,
	})
	declare activated: boolean;

	@ApiProperty({
		description: 'The status of user',
		default: true,
		example: true
	})
	@Column({
		type: DataType.BOOLEAN,
		field: 'removed',
		defaultValue: false,
	})
	declare removed: boolean;

	@BelongsTo(() => GroupDataEntity, { onDelete: 'casCade' })
	declare group: GroupDataEntity
	@ApiProperty({
		description: 'ForeignKey Group ID',
		nullable: false,
		example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
	})
	@ForeignKey(() => GroupDataEntity)
	@Column({
		type: DataType.UUID,
		field: 'group_id',
		allowNull: true
	})
	declare groupId: string

	
	@ApiProperty({
		description: 'When auth was created',
		nullable: false,
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "created_at",
		defaultValue: new Date()
	})
	declare createdAt: Date;

	@ApiProperty({
		description: 'When auth was updated',
		nullable: false,
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "updated_at",
		defaultValue: new Date()
	})
	declare updatedAt: Date;


}
