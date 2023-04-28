
import { Column, DataType, Table, Model, HasMany, BelongsToMany } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { GroupTypeEnum } from "../types/group-data.types.enum";
import { UserEntity } from "../../../modules/user-account/entities/user-account.entity";
import { GroupDataAttributes, GroupDataCreationAttributes } from "../types/group-entity.types";
import { ColorSchemeEntity } from './../../color-scheme/entities/color-scheme.entity';
import { GroupColorSchemeEntity } from "../../color-scheme/entities/group-color-scheme.entity";
import { CategoryEntity } from './../../category/entities/category.entity';
import { ProductEntity } from "src/modules/product/entities/product.entity";

@Table({
	tableName: 'group_data',
	underscored: true,
	freezeTableName: true
})
export class GroupDataEntity extends Model<GroupDataAttributes, GroupDataCreationAttributes>{
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
		maxLength: 160
	})
	@Column({
		type: DataType.STRING(160),
		allowNull: false,
		field: 'agency'
	})
	declare agency: string;


	@ApiProperty({
		description: 'logo image',
		example: 'logo.png',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255),
		defaultValue: 'logo.png'
	})
	declare logo: string;

	@ApiProperty({
		description: 'banner image',
		example: 'banner.png',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255),
		defaultValue: 'banner.png'
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
		maxLength: 120,
		uniqueItems: false
	})
	@Column({
		type: DataType.STRING(120),
		unique: false,
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
		field: 'subdistrict',
		allowNull: false
	})
	declare subdistrict: string

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

	@HasMany(() => CategoryEntity)
	categories: CategoryEntity[]

	@HasMany(() => ProductEntity)
	products: ProductEntity[]

	@BelongsToMany(() => ColorSchemeEntity, () => GroupColorSchemeEntity)
	colorSchemes: ColorSchemeEntity[];

}
