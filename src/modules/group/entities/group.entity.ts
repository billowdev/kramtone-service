
import { Column, DataType, Table, Model, ForeignKey, BelongsTo, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { GroupTypeEnum } from "../types/group-type.enum";
import { AddressEntity } from "../../../modules/address/entities/address.entity";
import { UserEntity } from "../../../modules/user/entities/user.entity";
import { GroupAttributes, GroupCreationAttributes } from "../types/group-entity.types";
import { ColorSchemeEntity } from './../../color-scheme/entities/color-scheme.entity';
import { GroupColorSchemeEntity } from "src/modules/color-scheme/entities/group-color-scheme.entity";

@Table({
	tableName: 'group',
	underscored: true,
	freezeTableName: true
})
export class GroupEntity extends Model<GroupAttributes, GroupCreationAttributes>{
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
		description: 'group name',
		example: 'group name',
		nullable: false,
		maxLength: 100
	})
	@Column({
		type: DataType.STRING(100),
		allowNull: false,
		field: 'group_name'
	})
	declare groupName: string;

	@ApiProperty({
		description: 'Group Type',
		nullable: false,
		enum: GroupTypeEnum,
		default: GroupTypeEnum.SHOP
	})
	@Column({
		type: DataType.ENUM({
			values: [GroupTypeEnum.SHOP, GroupTypeEnum.PRODUCER]
		}),
		defaultValue: GroupTypeEnum.SHOP,
		field: 'group_type',
	})
	declare groupType: GroupTypeEnum;

	@ApiProperty({
		description: 'group name',
		example: 'group name',
		nullable: false,
		maxLength: 150
	})
	@Column({
		type: DataType.STRING(150),
		allowNull: false,
		field: 'agency'
	})
	declare agency: string;


	@ApiProperty({
		description: 'logo image',
		example: 'default_image.png',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255)
	})
	declare logo: string;

	@ApiProperty({
		description: 'banner image',
		example: 'default_image.png',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255)
	})
	declare banner: string;

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
		description: 'is Group has verified',
		nullable: false,
		type: Boolean,
		default: false
	})
	@Column({
		type: DataType.BOOLEAN,
		field: 'verified',
		defaultValue: false
	})
	declare verified: boolean

	// @BelongsTo(() => AddressEntity, { onDelete: 'casCade' })
	// declare address: AddressEntity
	// @ApiProperty({
	// 	description: 'ForeignKey Address ID',
	// 	nullable: false,
	// 	example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
	// })
	// @ForeignKey(() => AddressEntity)
	// @Column({
	// 	type: DataType.UUID,
	// 	field: 'address_id',
	// 	allowNull: false
	// })
	// declare addressId: string

	@ApiProperty({
		description: 'The house number',
		example: '9',
		maxLength: 5,
		nullable: false
	})
	@Column({
		type: DataType.STRING(10),
		field: 'hno',
		allowNull: false,
	})
	declare hno: string

	@ApiProperty({
		description: 'The village name',
		example: 'บ้านมะขามป้อม',
		maxLength: 50,
		nullable: false
	})
	@Column({
		type: DataType.STRING(50),
		allowNull: false
	})
	declare village: string

	@ApiProperty({
		description: 'The lane name',
		example: 'ซอยมะขามป้อม',
		maxLength: 50,
		nullable: true
	})
	@Column({
		type: DataType.STRING(50),
		allowNull: true
	})
	declare lane: string

	@ApiProperty({
		description: 'The lane name',
		example: 'ถนนมะขามป้อม',
		nullable: true,
		maxLength: 50
	})
	@Column({
		type: DataType.STRING(50),
		allowNull: true
	})
	declare road: string

	@ApiProperty({
		description: 'Sub-District name',
		example: 'ตำบลมะขามป้อม',
		maxLength: 50,
		nullable: false
	})
	@Column({
		type: DataType.STRING(50),
		field: 'sub_district',
		allowNull: false
	})
	declare subDistrict: string

	@ApiProperty({
		description: 'District name',
		example: 'อำเภอมะขามป้อม',
		maxLength: 50,
		nullable: false
	})
	@Column({
		type: DataType.STRING(50),
		allowNull: false
	})
	declare district: string

	@ApiProperty({
		description: 'Province name',
		example: 'จังหวัดมะขามป้อม',
		maxLength: 50,
		nullable: false
	})
	@Column({
		type: DataType.STRING(50),
		allowNull: false
	})
	declare province: string

	@ApiProperty({
		description: 'Zip code',
		example: '44999',
		maxLength: 10
	})
	@Column({
		type: DataType.STRING(10),
		field: 'zip_code',
	})
	declare zipCode: string

	@ApiProperty({
		description: 'Latitude -90 to 90',
		example: '17.19251375299034',
		maxLength: 20,
		nullable: true,
	})
	@Column({
		type: DataType.STRING(20),
		allowNull: true
	})
	declare lat: string

	@ApiProperty({
		description: 'Longitude -180 to 180',
		example: '104.09357647572693',
		maxLength: 20,
		nullable: true,
	})
	@Column({
		type: DataType.STRING(20),
		allowNull: true
	})
	declare lng: string


	@ApiProperty({
		description: 'When user was created',
		nullable: false,
		format: Date(),
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "created_at",
		defaultValue: new Date()
	})
	declare createdAt: Date;

	@ApiProperty({
		description: 'When user was updated',
		nullable: false,
		format: Date(),
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "updated_at",
		defaultValue: new Date()
	})
	declare updatedAt: Date;

	@HasMany(() => UserEntity)
	users: UserEntity[]

	@BelongsToMany(() => ColorSchemeEntity, () => GroupColorSchemeEntity)
	colorSchemes: ColorSchemeEntity[];

}
