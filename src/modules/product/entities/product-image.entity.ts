import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ProductImageAttributes, ProductImageCreationAttributes } from "../types/product-image-entity.types";
import { ProductEntity } from "./product.entity";

@Table({
	tableName: 'product_image',
	underscored: true,
	freezeTableName: true
})
export class ProductImageEntity extends Model<ProductImageAttributes, ProductImageCreationAttributes> {

	@ApiProperty({
		description: 'Primary key as product-image ID',
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
		description: 'product Image name',
		example: 'image_name',
		nullable: true,
		maxLength: 255
	})
	@Column({
		type: DataType.STRING(255),
		allowNull: true
	})
	declare image: string;

	@BelongsTo(() => ProductEntity, { onDelete: 'casCade' })
	product: ProductEntity
	@ForeignKey(() => ProductEntity)
	@ApiProperty({
		description: 'Foreign key as categoryId',
		example: '41b4f7c2-b221-4a6b-a0e3-d7ec80e011a1',
	})
	@Column({
		type: DataType.UUID,
		field: "product_id",
		unique: false,
		allowNull: false
	})
	declare productId: string;

	@ApiProperty({
		description: 'When product image was created',
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
		description: 'When product image was updated',
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
