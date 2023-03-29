import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFile, UseGuards, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBadRequestResponse, ApiConsumes, ApiTags, ApiOkResponse, ApiUnauthorizedResponse, ApiParam } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { Roles } from '../../../common/decorators/roles.decorator';
import { JwtAuthGuard, RolesGuard } from '../../../common/guards';
import { ApiCommonUnauthorizedException } from '../../../common/swagger-document/unauthorized.document';
import { requestErrorResponse, requestFailResponse, requestOkResponse } from '../../../common/utils/generate-response.util';
import { imageFileFilter } from '../../../common/utils/image-file-filter.util';
import { updateProductFileName } from '../../../common/utils/update-file-name.util';
import { Role } from '../../../modules/user-account/types/role.enum';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductImageEntity } from '../entities/product-image.entity';
import { ProductEntity } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { CreateProductImageResponseType, DeleteProductImageResponseType, GetOneProductResponseType, ProductArrayResponseType, ProductArrayType } from '../types/product.types';
import { ApiProductCreateBadRequestResponse, ApiProductCreateOkResponse, ApiProductGetOneOkResponse, ApiProductParam, ApiProductGetOneBadRequestResponse, ApiProductUpdateOkResponse, ApiProductUpdateBadRequestResponse, ApiProductDeleteOkResponse, ApiProductDeleteBadRequestResponse, ApiProductGetImageOkResponse, ApiProductGetImageBadRequestResponse, ApiProductGetAllOkRespose } from './../product.document';


@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) { }


  // ============================ Product ===================================

  @Roles(Role.ADMIN, Role.MEMBER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOkResponse(ApiProductCreateOkResponse)
  @ApiBadRequestResponse(ApiProductCreateBadRequestResponse)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      const payload: ProductEntity = await this.productService.createProduct(createProductDto);
      return requestOkResponse<ProductEntity>(payload)
    } catch (error) {
      return requestErrorResponse(400, "create product was error")
    }
  }


  @ApiOkResponse(ApiProductGetAllOkRespose)
  @ApiBadRequestResponse(ApiProductGetImageBadRequestResponse)
  @Get()
  async findAllProduct(): Promise<ProductArrayResponseType> {
    try {
      const payload: ProductArrayType = await this.productService.findAllProduct();
      return requestOkResponse<ProductArrayType>(payload);
    } catch (error) {
      return requestErrorResponse(400, "get all product was failed")
    }
  }

  @Get(':id')
  @ApiParam(ApiProductParam)
  @ApiOkResponse(ApiProductGetOneOkResponse)
  @ApiBadRequestResponse(ApiProductGetOneBadRequestResponse)
  async findOneProduct(@Param('id') id: string): Promise<GetOneProductResponseType> {
    try {
      const payload: ProductEntity = await this.productService.findOneProduct(id);
      return requestOkResponse<ProductEntity>(payload)
    } catch (error) {
      return requestErrorResponse(400, "get one product was failed")
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiOkResponse(ApiProductUpdateOkResponse)
  @ApiBadRequestResponse(ApiProductUpdateBadRequestResponse)
  @ApiParam(ApiProductParam)
  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const payload: number[] = await this.productService.updateProduct(id, updateProductDto);
      return requestOkResponse<number[]>(payload)
    } catch (error) {
      return requestErrorResponse(400, "update product was failed")
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiOkResponse(ApiProductDeleteOkResponse)
  @ApiBadRequestResponse(ApiProductDeleteBadRequestResponse)
  @ApiParam(ApiProductParam)
  @Delete(':id')
  async removeProduct(@Param('id') id: string) {
    try {
      const payload: number = await this.productService.removeProduct(id);
      return requestOkResponse<number>(payload);
    } catch (error) {
      return requestErrorResponse(400, "delete product was failed")
    }
  }

  // ============================ Product Image ===================================

  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @HttpCode(HttpStatus.FORBIDDEN)
  @HttpCode(HttpStatus.UNAUTHORIZED)
  @ApiParam(ApiProductParam)
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './public/uploaded/images/products',
      filename: updateProductFileName,
    }),
    fileFilter: imageFileFilter
  }))
  @Post('/upload/:id')
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Param('id') id: string):
    Promise<CreateProductImageResponseType> {
    try {
      const product: ProductEntity = await this.productService.findOneProduct(id);
      if (!product) return requestFailResponse(400, 'upload product image was failed');
      const productId = id
      const imageFromReq: string = file.filename;
      const payload: ProductImageEntity = await this.productService.createProductImage({
        productId, image: imageFromReq
      });
      return requestOkResponse<ProductImageEntity>(payload)
    } catch (error) {
      return requestErrorResponse(400, "upload product image was error")
    }
  }

  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiParam(ApiProductParam)
  @Delete(':id')
  async removeProductImage(@Param('id') id: string): Promise<DeleteProductImageResponseType> {
    try {
      const payload: number = await this.productService.removeProductImage(id);
      return requestOkResponse<number>(payload);
    } catch (error) {
      return requestErrorResponse(400, "delete product image was failed")
    }
  }


  @ApiOkResponse(ApiProductGetImageOkResponse)
  @ApiBadRequestResponse(ApiProductGetImageBadRequestResponse)
  @Get('/images/:image_name')
  requestImages(@Param('image_name') image, @Res() res) {
    res.sendFile(image, { root: './public/uploaded/images/products' });
  }


}
