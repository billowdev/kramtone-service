import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ProductEntity } from "../../../modules/product/entities/product.entity";
import { CategoryAttributes, CategoryCreationAttributes } from "../types/category-entity.types";
import { GroupDataEntity } from './../../group-data/entities/group-data.entity';

@Table({
	tableName: 'category',
	underscored: true,
	freezeTableName: true
})
export class CategoryEntity extends Model<CategoryAttributes, CategoryCreationAttributes> {

	@ApiProperty({
		description: 'Primary key as Category ID',
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

	@ApiProperty({
		description: 'The category name',
		example: 'ผ้าซิ่น',
		nullable: false,
		maxLength: 50
	})
	@Column({
		type: DataType.STRING(50),
		allowNull: false
	})
	declare name: string;

	@ApiProperty({
		description: 'The category description',
		example: 'ผ้าซิ่นย้อมคราม',
		nullable: true,
		maxLength: 500
	})
	@Column({
		type: DataType.STRING(255),
		allowNull: true
	})
	declare desc: string;

	@ApiProperty({
		description: 'Category Image name',
		example: 'image_name',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255),
		allowNull: true
	})
	declare image: string;

	// @BelongsTo(()=> GroupDataEntity, {onDelete: 'casCade'})
	// group: GroupDataEntity
	// @ForeignKey(()=>GroupDataEntity)
	// @ApiProperty({
	// 	description: 'Foreign key as categoryId',
	// 	example: "21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
	// })
	// @Column({
	// 	type: DataType.UUID,
	// 	field: "group_id",
	// 	unique: false,
	// 	allowNull: true
	// })
	// declare groupId: string


	// @ApiProperty({
	// 	description: 'The status that is default category',
	// 	default: false,
	// 	example: true
	// })
	// @Column({
	// 	type: DataType.BOOLEAN,
	// 	field: 'is_default',
	// 	defaultValue: false,
	// })
	// declare isDefault: boolean;


	@ApiProperty({
		description: 'When category was created',
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
		description: 'When category was updated',
		nullable: false,
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "updated_at",
		defaultValue: new Date()
	})
	declare updatedAt: Date;

	@HasMany(() => ProductEntity)
	products: ProductEntity[]
}
