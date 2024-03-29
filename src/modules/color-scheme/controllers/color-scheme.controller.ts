import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiForbiddenResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../../common/decorators/roles.decorator';
import { JwtAuthGuard, RolesGuard } from '../../../common/guards';
import { ApiCommonForbiddenResponse } from '../../../common/swagger-document/forbidden.document';
import { requestErrorResponse, requestFailResponse, requestOkResponse } from '../../../common/utils/generate-response.util';
import { Role } from '../../../modules/user-account/types/role.enum';
import { BulkCreateColorSchemeDto, CreateColorSchemeDto } from '../dto/create-color-scheme.dto';
import { UpdateColorSchemeDto } from '../dto/update-color-scheme.dto';
import { ColorSchemeEntity } from '../entities/color-scheme.entity';
import { ApiColorSchemeBulkCreatedBadRequestResponse, ApiColorSchemeBulkCreatedBody, ApiColorSchemeBulkCreatedOkResponse, ApiColorSchemeCreatedBadRequestResponse, ApiColorSchemeCreatedBody, ApiColorSchemeCreatedOkResponse, ApiColorSchemeDeleteBadRequestResponse, ApiColorSchemeDeleteOkResponse, ApiColorSchemeGetAllBadRequestResponse, ApiColorSchemeGetAllOkResponse, ApiColorSchemeGetOneBadRequestResponse, ApiColorSchemeGetOneOkResponse, ApiColorSchemeIdParam, ApiColorSchemeUpdateBadRequestResponse, ApiColorSchemeUpdateOkResponse } from '../color-scheme.document';
import { ColorSchemeService } from '../services/color-scheme.service';
import { CreateColorSchemeResponseType, DeleteColorSchemeResponseType, GetOneColorSchemeResponseType, ColorSchemeArrayResponseType, ColorSchemeArrayType, UpdateColorSchemeResponseType, GroupColorSchemeArrayResponseType, GroupColorSchemeArrayType, GetOneGroupColorSchemeResponseType, DeleteGroupColorSchemeResponseType } from '../types/color-scheme.types';
import { GroupColorSchemeEntity } from '../entities/group-color-scheme.entity';

@ApiTags('ColorScheme of natunal indigo tone')
@Controller('colorschemes')
export class ColorSchemeController {
  constructor(private readonly colorSchemeService: ColorSchemeService,
    ) { }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  @ApiBody(ApiColorSchemeCreatedBody)
  @ApiOkResponse(ApiColorSchemeCreatedOkResponse)
  @ApiBadRequestResponse(ApiColorSchemeCreatedBadRequestResponse)
  @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  @Post()
  async create(@Body() createColorSchemeDto: CreateColorSchemeDto): Promise<CreateColorSchemeResponseType> {
    try {
      const payload: ColorSchemeEntity = await this.colorSchemeService.create(createColorSchemeDto);
      return requestOkResponse<ColorSchemeEntity>(payload)
    } catch (error) {
      return requestFailResponse(400, 'create indigo tone was failed')
    }
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  // @ApiBody(ApiColorSchemeBulkCreatedBody)
  // @ApiOkResponse(ApiColorSchemeBulkCreatedOkResponse)
  // @ApiBadRequestResponse(ApiColorSchemeBulkCreatedBadRequestResponse)
  // @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  @Post('/bulk')
  async bulkCreate(@Body() bulkCreateColorSchemeDto: BulkCreateColorSchemeDto): Promise<ColorSchemeArrayResponseType> {
    try {
      const payload: ColorSchemeArrayType= await this.colorSchemeService.bulkCreate(bulkCreateColorSchemeDto);
      return requestOkResponse<ColorSchemeArrayType>(payload)
    } catch (error) {
      return requestFailResponse(400, 'bulk create indigo tone was failed')
    }
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiOkResponse(ApiColorSchemeGetAllOkResponse)
  @ApiBadRequestResponse(ApiColorSchemeGetAllBadRequestResponse)
  async findAll(): Promise<ColorSchemeArrayResponseType> {
    try {
      const payload: ColorSchemeArrayType = await this.colorSchemeService.findAll();
      return requestOkResponse<ColorSchemeArrayType>(payload);
    } catch (error) {
      return requestFailResponse(400, 'get all indigo tone was failed')
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiParam(ApiColorSchemeIdParam)
  @ApiOkResponse(ApiColorSchemeGetOneOkResponse)
  @ApiBadRequestResponse(ApiColorSchemeGetOneBadRequestResponse)
  async findOne(@Param('id') id: string): Promise<GetOneColorSchemeResponseType> {
    try {
      const payload: ColorSchemeEntity = await this.colorSchemeService.findOne(id);
      if (!payload) return requestFailResponse(400, 'get one indigo tone was failed')
      return requestOkResponse<ColorSchemeEntity>(payload);
    } catch (error) {
      return requestErrorResponse(400, 'get one indigo tone was error')
    }
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiParam(ApiColorSchemeIdParam)
  @ApiOkResponse(ApiColorSchemeUpdateOkResponse)
  @ApiBadRequestResponse(ApiColorSchemeUpdateBadRequestResponse)
  async update(@Param('id') id: string, @Body() updateColorSchemeDto: UpdateColorSchemeDto): Promise<UpdateColorSchemeResponseType> {
    try {
      const payload = await this.colorSchemeService.update(id, updateColorSchemeDto);
      return requestOkResponse<any>(payload);
    } catch (error) {
      return requestFailResponse(400, 'update indigo tone was failed')
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiParam(ApiColorSchemeIdParam)
  @ApiOkResponse(ApiColorSchemeDeleteOkResponse)
  @ApiBadRequestResponse(ApiColorSchemeDeleteBadRequestResponse)
  async remove(@Param('id') id: string): Promise<DeleteColorSchemeResponseType> {
    try {
      const payload: number = await this.colorSchemeService.remove(id);
      return requestOkResponse<number>(payload);
    } catch (error) {
      return requestFailResponse(400, 'delete indigo tone was failed')
    }
  }

  // =============== group color scheme ==========================
//   @UseGuards(JwtAuthGuard)
//   @HttpCode(HttpStatus.OK)
//   @HttpCode(HttpStatus.BAD_REQUEST)
//   @HttpCode(HttpStatus.FORBIDDEN)
//   @ApiBody(ApiColorSchemeCreatedBody)
//   @ApiOkResponse(ApiColorSchemeCreatedOkResponse)
//   @ApiBadRequestResponse(ApiColorSchemeCreatedBadRequestResponse)
//   @ApiForbiddenResponse(ApiCommonForbiddenResponse)
//   @Post('/group')
//   async createGroupColorScheme(@Body() createColorSchemeDto: {
//     groupId: string,
//     colorSchemeId: string
//   }): Promise<CreateColorSchemeResponseType> {
//     try {
//       const payload: GroupColorSchemeEntity = await this.colorSchemeService.createGroupColorScheme(createColorSchemeDto);
//       return requestOkResponse<any>(payload)
//     } catch (error) {
//       if(error.status === 409){
        
//         return requestFailResponse(409, 'create group color scheme was conflic !')
        
//       } else{
//         return requestFailResponse(400, 'create group color scheme was failed')

//       }
//     }
//   }


//   @Get('group/:groupId')
//   @HttpCode(HttpStatus.OK)
//   @HttpCode(HttpStatus.BAD_REQUEST)
//   @ApiOkResponse(ApiColorSchemeGetAllOkResponse)
//   @ApiBadRequestResponse(ApiColorSchemeGetAllBadRequestResponse)
//   async findAllGroupColorScheme(@Param('groupId') groupId: string): Promise<any> {
//     try {
//       const payload = await this.colorSchemeService.findAllGroupColorScheme(groupId);
//       return requestOkResponse<any>(payload);
//     } catch (error) {
//       console.log(error)
//       return requestFailResponse(400, 'get all color scheme by group was failed')
//     }
//   }

//   @Get('group/delete/:id')
//   @HttpCode(HttpStatus.OK)
//   @HttpCode(HttpStatus.BAD_REQUEST)
//   @ApiParam(ApiColorSchemeIdParam)
//   @ApiOkResponse(ApiColorSchemeGetOneOkResponse)
//   @ApiBadRequestResponse(ApiColorSchemeGetOneBadRequestResponse)
//   async findOneGroupColorScheme(@Param('groupId') groupId: string, @Param('colorSchemeId') colorSchemeId: string): Promise<GetOneGroupColorSchemeResponseType> {
//     try {
//       const payload: GroupColorSchemeEntity = await this.colorSchemeService.findOneGroupColorScheme(groupId, colorSchemeId);
//       if (!payload) return requestFailResponse(400, 'get one group color scheme was failed')
//       return requestOkResponse<GroupColorSchemeEntity>(payload);
//     } catch (error) {
//       return requestErrorResponse(400, 'get one group color scheme was error')
//     }
//   }


//   @Delete('group/delete/:id')
//   @HttpCode(HttpStatus.OK)
//   @HttpCode(HttpStatus.BAD_REQUEST)
//   @ApiParam(ApiColorSchemeIdParam)
//   @ApiOkResponse(ApiColorSchemeDeleteOkResponse)
//   @ApiBadRequestResponse(ApiColorSchemeDeleteBadRequestResponse)
//   async removeGroupColorScheme(@Param('id') id: string): Promise<any> {
//     try {
//       const payload = await this.colorSchemeService.removeGroupColorScheme(id);
//       return requestOkResponse<any>(payload);
//     } catch (error) {
//       return requestFailResponse(400, 'delete indigo tone was failed')
//     }
//   }

}
