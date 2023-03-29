import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user-account.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
