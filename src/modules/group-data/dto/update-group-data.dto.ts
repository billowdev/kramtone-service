import { PartialType } from '@nestjs/swagger';
import { CreateGroupDto } from './create-group-data.dto';

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
	logoFile?: any | Blob;
	bannerFile?: any | Blob;
}
