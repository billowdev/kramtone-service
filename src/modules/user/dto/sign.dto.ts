import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { UserEntity } from '../../../modules/user/entities/user.entity';

export class SignDto {
  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  user: UserEntity;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  token: string;
}
