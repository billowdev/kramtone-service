import { PRODUCT_REPOSITORY } from "../../../common/constants";
import { ProductEntity } from "./product.entity";

export const productProviders = [
	{
		provide: PRODUCT_REPOSITORY,
		useValue: ProductEntity
	}
]