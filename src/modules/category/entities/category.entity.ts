import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ProductEntity } from "../../../modules/product/entities/product.entity";
import { CategoryAttributes, CategoryCreationAttributes } from "../types/category-entity.types";

@Table({
	tableName: 'category',
	underscored: true,
	freezeTableName: true
})
export class CategoryEntity extends Model<CategoryAttributes, CategoryCreationAttributes> {

	@ApiProperty({
		description: 'Primary key as category ID',
		example: '1',
		uniqueItems: true,
		nullable: false
	})
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	declare id: number

	@ApiProperty({
		description: 'The category name',
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
