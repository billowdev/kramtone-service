import { CategoryEntity } from "../entities/category.entity";
import { ProductEntity } from "../entities/product.entity";

export type ProductArrayType = ProductEntity[]
export type ProductArrayResponseType = RequestResponseType<ProductEntity[]>
export type CreateProductResponseType = RequestResponseType<CategoryEntity>;
export type GetOneProductResponseType = RequestResponseType<ProductEntity>
export type UpdateProductResponseType = RequestResponseType<number[]>
export type DeleteProductResponseType = RequestResponseType<number>

export type ProductImageArrayType = ProductImageEntity[]
export type CreateProductImageResponseType = RequestResponseType<CategoryEntity>;
export type GetOneProductImageResponseType = RequestResponseType<ProductImageEntity>
export type DeleteProductImageResponseType = RequestResponseType<number>

export interface ProductQueryInterface extends Partial<ProductAttributes> {
	keyword?: string,
	name?: string,
	desc?: string,
	price?: string,
	groupId?: string,
	categoryId?: string,
}
