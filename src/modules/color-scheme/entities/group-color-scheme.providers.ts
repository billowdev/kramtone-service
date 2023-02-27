

import {  GROUP_COLOR_SCHEME_REPOSITORY } from "../../../common/constants";
import { GroupColorSchemeEntity } from "./group-color-scheme.entity";

export const groupColorSchemeProviders = [
	{
		provide: GROUP_COLOR_SCHEME_REPOSITORY,
		useValue: GroupColorSchemeEntity
	}
]