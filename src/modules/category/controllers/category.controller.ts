import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, UseInterceptors, UploadedFile, BadRequestException, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBadRequestResponse, ApiConsumes, ApiForbiddenResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { Roles } from '../../../common/decorators/roles.decorator';
import { JwtAuthGuard, RolesGuard } from '../../../common/guards';
import { ApiCommonForbiddenResponse } from '../../../common/swagger-document/forbidden.document';
import { ApiCommonUnauthorizedException } from '../../../common/swagger-document/unauthorized.document';
import { requestErrorResponse, requestFailResponse, requestOkResponse } from '../../../common/utils/generate-response.util';
import { imageFileFilter } from '../../../common/utils/image-file-filter.util';
import { removeExistImage } from '../../../common/utils/remove-exist-image.util';
import { updateCategoryFileName } from '../../../common/utils/update-file-name.util';
import { Role } from '../../../modules/user/types/role.enum';
import { ApiCategoryCreatedBadRequestResponse, ApiCategoryCreatedOkResponse, ApiCategoryDeleteBadRequestResponse, ApiCategoryDeleteOkResponse, ApiCategoryGetOneBadRequestResponse, ApiCategoryGetOneOkResponse, ApiCategoryParam, ApiCategoryUpdateBadRequestResponse, ApiCategoryUpdateOkResponse } from '../category.document';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryService } from '../services/category.service';
import { CateogoryArrayResponseType, CateogoryArrayType, CreateCategoryResponseType } from '../types/category.types';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  @HttpCode(HttpStatus.UNAUTHORIZED)
  @ApiOkResponse(ApiCategoryCreatedOkResponse)
  @ApiBadRequestResponse(ApiCategoryCreatedBadRequestResponse)
  @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CreateCategoryResponseType> {
    try {
      const payload: CategoryEntity = await this.categoryService.create(createCategoryDto);
      return requestOkResponse<CategoryEntity>(payload);
    } catch (error) {
      return requestErrorResponse(400, 'create category was error');
    }
  }

  @ApiOkResponse(ApiCategoryCreatedOkResponse)
  @ApiBadRequestResponse(ApiCategoryCreatedBadRequestResponse)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @Get()
  async findAll(): Promise<CateogoryArrayResponseType> {
    try {
      const payload: CateogoryArrayType = await this.categoryService.findAll();
      return requestOkResponse<CateogoryArrayType>(payload);
    } catch (error) {
      return requestErrorResponse(400, 'get all category was failed');
    }
  }

  @ApiParam(ApiCategoryParam)
  @ApiOkResponse(ApiCategoryGetOneOkResponse)
  @ApiBadRequestResponse(ApiCategoryGetOneBadRequestResponse)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const payload: CategoryEntity = await this.categoryService.findOne(+id);
      return requestOkResponse<CategoryEntity>(payload)
    } catch (error) {
      return requestErrorResponse(400, 'get one category was failed')
    }
  }

  @Roles(Role.ADMIN)
  @ApiParam(ApiCategoryParam)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse(ApiCategoryUpdateOkResponse)
  @ApiBadRequestResponse(ApiCategoryUpdateBadRequestResponse)
  @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  @HttpCode(HttpStatus.UNAUTHORIZED)
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
    try {
      const payload: number[] = await this.categoryService.update(+id, updateCategoryDto);
      return requestOkResponse<number[]>(payload)
    } catch (error) {
      return requestFailResponse(400, 'update category was failed');
    }
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiParam(ApiCategoryParam)
  @ApiOkResponse(ApiCategoryDeleteOkResponse)
  @ApiBadRequestResponse(ApiCategoryDeleteBadRequestResponse)
  @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  @HttpCode(HttpStatus.UNAUTHORIZED)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const payload: number = await this.categoryService.remove(+id);
      return requestOkResponse<number>(payload)
    } catch (error) {
      return requestFailResponse(400, 'delte category was failed')
    }
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse(ApiCategoryUpdateOkResponse)
  @ApiBadRequestResponse(ApiCategoryUpdateBadRequestResponse)
  @ApiForbiddenResponse(ApiCommonForbiddenResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  @HttpCode(HttpStatus.UNAUTHORIZED)
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './public/uploaded/images/categories',
      filename: updateCategoryFileName,
    }),
    fileFilter: imageFileFilter
  }))
  @Post('/upload/:id')
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Param('id', ParseIntPipe) id: number):
    Promise<any> {
    try {
      const category: CategoryEntity = await this.categoryService.findOne(id);

      const oldImage: string = category.image;
      const imageFromReq: string = file.filename;
      // if category already has an image. then delete it
      if (
        (oldImage !== "" || oldImage !== null) &&
        (oldImage !== imageFromReq)) {
        removeExistImage(oldImage, 'categories')
      }
      const updateCategory: UpdateCategoryDto = { ...category, image: imageFromReq }
      const updateStatus: number[] = await this.categoryService.update(+id, updateCategory);
      if (!updateStatus[0]) throw new BadRequestException()
      const payload: any = {
        image: imageFromReq
      }
      return requestOkResponse<any>(payload)
    } catch (error) {
      return requestFailResponse(400, "upload image was failed")
    }
  }

  @Get('/images/:image_name')
  @ApiOkResponse({
    schema: {
      type: 'string',
      format: 'binary'
    },
  })
  @ApiBadRequestResponse({
    schema: {
      example: {
        "statusCode": 404,
        "message": "ENOENT: no such file or directory"
      }
    }
  })
  requestImages(@Param('image_name') image, @Res() res) {
    return res.sendFile(image, { root: './public/uploaded/images/categories' })
  }

}
