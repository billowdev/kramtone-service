import { PRODUCT_IMAGE_REPOSITORY } from "../../../common/constants";
import { ProductImageEntity } from "./product-image.entity";

export const productImageProviders = [
	{
		provide: PRODUCT_IMAGE_REPOSITORY,
		useValue: ProductImageEntity
	}
]