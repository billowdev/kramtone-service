import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CategoryEntity } from "../../../modules/category/entities/category.entity";
import { ProductAttributes, ProductCreationAttributes } from "../types/product-entity.types";
import { ProductImageEntity } from "./product-image.entity";
import { GroupDataEntity } from './../../group-data/entities/group-data.entity';

@Table({
	tableName: 'product',
	underscored: true,
	freezeTableName: true
})
export class ProductEntity extends Model<ProductAttributes, ProductCreationAttributes> {

	@ApiProperty({
		description: 'Primary key as product ID',
		example: '61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1',
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
		description: 'The product name',
		example: 'ผ้าซิ่น',
		nullable: false,
		maxLength: 100
	})
	@Column({
		type: DataType.STRING(100),
		allowNull: false
	})
	declare name: string;

	@ApiProperty({
		description: 'The product description',
		example: 'ผ้าซิ่นย้อมคราม',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255),
		allowNull: true
	})
	declare desc: string;

	@ApiProperty({
		description: 'The Product price',
		example: 200.00,
	})
	@Column({
		type: DataType.DECIMAL(10, 2),
	})
	declare price: number;

	@BelongsTo(() => GroupDataEntity, { onDelete: 'casCade' })
	groupData: GroupDataEntity
	@ForeignKey(() => GroupDataEntity)
	@ApiProperty({
		description: 'Foreign key as groupId',
		example: '21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1',
	})
	@Column({
		type: DataType.UUID,
		field: "group_id",
		unique: false,
		allowNull: false
	})
	declare groupId: string;


	@BelongsTo(()=> CategoryEntity, {onDelete: 'casCade'})
	category: CategoryEntity
	@ForeignKey(()=>CategoryEntity)
	@ApiProperty({
		description: 'Foreign key as categoryId',
		example: "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
	})
	@Column({
		type: DataType.UUID,
		field: "category_id",
		unique: false,
		allowNull: false
	})
	declare categoryId: string

	@ApiProperty({
		description: 'When product was created',
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
		description: 'When product was updated',
		nullable: false,
		example: new Date()
	})
	@Column({
		type: DataType.DATE,
		field: "updated_at",
		defaultValue: new Date()
	})
	declare updatedAt: Date;
	
	@HasMany(() => ProductImageEntity)
	productImages: ProductImageEntity[]

}
