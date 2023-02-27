import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { UserAttributes, UserCreationAttributes } from "../types/user-entity.types";
import { Column, DataType, Table, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Role } from "../types/role.enum";
import { GroupEntity } from './../../group/entities/group.entity';

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
		maxLength: 150,
		nullable: false
	})
	@Column({
		type: DataType.STRING(150),
		unique: true,
		allowNull: false,
	})
	declare username: string;

	@ApiProperty({
		description: 'The email of user',
		example: 'billowdev@gmail.com',
		nullable: false,
		maxLength: 150,
		uniqueItems: true
	})
	@Column({
		type: DataType.STRING(150),
		unique: true,
		allowNull: false,
	})
	declare email: string;

	@ApiProperty({
		description: 'name',
		example: 'name',
		nullable: false,
		maxLength: 100
	})
	@Column({
		type: DataType.STRING(100),
		allowNull: false,
		field: 'name'
	})
	declare name: string;

	@ApiProperty({
		description: 'surname',
		example: 'surname',
		nullable: false,
		maxLength: 100
	})
	@Column({
		type: DataType.STRING(100),
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
		description: 'The hashed password of user',
		example: 'passwordhashing',
		maxLength: 150,
		nullable: false
	})
	@Column({
		type: DataType.STRING(150),
		allowNull: false,
		field: 'hash_password'
	})
	declare hashPassword: string;

	@ApiProperty({
		description: 'Role of user',
		nullable: false,
		enum: Role,
		default: Role.USER
	})
	@Column({
		type: DataType.ENUM({
			values: [Role.USER, Role.ADMIN]
		}),
		defaultValue: Role.USER
	})
	declare role: Role;

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
		field: 'remove',
		defaultValue: false,
	})
	declare remove: boolean;

	@BelongsTo(() => GroupEntity, { onDelete: 'casCade' })
	declare group: GroupEntity
	@ApiProperty({
		description: 'ForeignKey Group ID',
		nullable: false,
		example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
	})
	@ForeignKey(() => GroupEntity)
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
