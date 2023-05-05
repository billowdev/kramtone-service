import { RequestResponseType } from "../../../common/types/response.common.types";
import { ColorSchemeEntity } from "../entities/color-scheme.entity";

export type ColorSchemeArrayType = ColorSchemeEntity[]
export type GetOneColorSchemeResponseType = RequestResponseType<ColorSchemeEntity>
export type CreateColorSchemeResponseType = RequestResponseType<ColorSchemeEntity>
export type ColorSchemeArrayResponseType = RequestResponseType<ColorSchemeEntity[]>
export type UpdateColorSchemeResponseType = RequestResponseType<number[]>
export type DeleteColorSchemeResponseType = RequestResponseType<number>


export type GroupColorSchemeArrayType = GroupColorSchemeEntity[]
export type GetOneGroupColorSchemeResponseType = RequestResponseType<GroupColorSchemeEntity>
export type CreateGroupColorSchemeResponseType = RequestResponseType<GroupColorSchemeEntity>
export type GroupColorSchemeArrayResponseType = RequestResponseType<GroupColorSchemeEntity[]>
export type UpdateGroupColorSchemeResponseType = RequestResponseType<number[]>
export type DeleteGroupColorSchemeResponseType = RequestResponseType<number>