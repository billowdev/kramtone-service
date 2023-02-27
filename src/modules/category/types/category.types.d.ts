import { CategoryEntity } from "../entities/category.entity";

export type CateogoryArrayType = CateogoryEntity[]
export type CateogoryArrayResponseType = RequestResponseType<CateogoryEntity[]>
export type CreateCategoryResponseType = RequestResponseType<CategoryEntity>;
export type GetOneCateogoryResponseType = RequestResponseType<CateogoryEntity>
export type UpdateCateogoryResponseType = RequestResponseType<number[]>
export type DeleteCateogoryResponseType = RequestResponseType<number>