import { RequestResponseType } from "../../../common/types/response.common.types";
import { ColorSchemeEntity } from "../entities/color-scheme.entity";

export type ColorSchemeArrayType = ColorSchemeEntity[]
export type GetOneColorSchemeResponseType = RequestResponseType<ColorSchemeEntity>
export type CreateColorSchemeResponseType = RequestResponseType<ColorSchemeEntity>
export type ColorSchemeArrayResponseType = RequestResponseType<ColorSchemeEntity[]>
export type UpdateColorSchemeResponseType = RequestResponseType<number[]>
export type DeleteColorSchemeResponseType = RequestResponseType<number>
