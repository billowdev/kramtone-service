import { COLOR_SCHEME_REPOSITORY } from "../../../common/constants";
import { ColorSchemeEntity } from "./color-scheme.entity";

export const ColorSchemeProviders = [
	{
		provide: COLOR_SCHEME_REPOSITORY,
		useValue: ColorSchemeEntity
	}
]