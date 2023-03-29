import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Request } from 'express';
import { TokenDto } from './token.dto';

export class LoginDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}


export interface RequestWithAuth extends Request {
  user: TokenDto
}