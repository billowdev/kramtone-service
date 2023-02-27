import { PartialType } from "@nestjs/swagger";
import { CreateColorSchemeDto } from "./create-color-scheme.dto";

export class UpdateColorSchemeDto extends PartialType(CreateColorSchemeDto) {

}
