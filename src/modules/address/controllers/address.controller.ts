import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiForbiddenResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ApiCommonUnauthorizedException } from '../../../common/swagger-document/unauthorized.document';
import { ApiAddressCreateBadRequestResponse, ApiAddressCreateBody, ApiAddressCreateOkResponse, ApiAddressDeleteOkResponse, ApiAddressGetOneBadRequestResponse, ApiAddressGetOneOkResponse, ApiAddressGetOneParam, ApiAddressUpdateBody, ApiAddressUpdateParam } from '../address.document';
import { CreateAddressResponseType, DeleteAddressResponseType, GetOneAddressResponseType, UpdateAddressResponseType, } from '../types/address';
import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { AddressEntity } from '../entities/address.entity';
import { AddressService } from '../services/address.service';
import { requestFailResponse, requestOkResponse } from '../../../common/utils/generate-response.util';
import { JwtAuthGuard } from '../../../common/guards';
import { ApiCommonForbiddenResponse } from '../../../common/swagger-document/forbidden.document';
import { ApiAddressDeleteParam, ApiAddressDeleteBadRequestResponse } from './../address.document';

@ApiTags('Address')
@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) { }

  @UseGuards(JwtAuthGuard)
  @ApiOkResponse(ApiAddressCreateOkResponse)
  @ApiBadRequestResponse(ApiAddressCreateBadRequestResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiBody(ApiAddressCreateBody)
  @Post()
  async create(@Body() createAddressDto: CreateAddressDto): Promise<CreateAddressResponseType> {
    try {
      const payload: AddressEntity = await this.addressService.create(createAddressDto);
      return requestOkResponse<AddressEntity>(payload)
    } catch (error) {
      return requestFailResponse(400, 'create address was failed')
    }
  }

  @Get(':id')
  @ApiParam(ApiAddressGetOneParam)
  @ApiOkResponse(ApiAddressGetOneOkResponse)
  @ApiBadRequestResponse(ApiAddressGetOneBadRequestResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  async findOne(@Param('id') id: string): Promise<GetOneAddressResponseType> {
    try {
      const payload: AddressEntity = await this.addressService.findOne(id);
      return requestOkResponse<AddressEntity>(payload)
    } catch (error) {
      return requestFailResponse<AddressEntity>(400, 'get one address was failed');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiParam(ApiAddressUpdateParam)
  @ApiBody(ApiAddressUpdateBody)
  @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto)
    : Promise<UpdateAddressResponseType> {
    try {
      const payload: number[] = await this.addressService.update(id, updateAddressDto);
      return requestOkResponse<number[]>(payload)
    } catch (error) {
      return requestFailResponse(400, 'update address was failed');
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiParam(ApiAddressDeleteParam)
  @ApiOkResponse(ApiAddressDeleteOkResponse)
  @ApiBadRequestResponse(ApiAddressDeleteBadRequestResponse)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteAddressResponseType> {
    try {
      const payload: number = await this.addressService.remove(id);
      return requestOkResponse<number>(payload)
    } catch (error) {
      return requestFailResponse(400, 'delete address was failed')
    }
  }
}
