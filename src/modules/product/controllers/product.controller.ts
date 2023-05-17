import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFile, UseGuards, Res, Query, Req, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
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
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import { FormDataInterceptor } from 'src/common/interceptors/form-data.interceptor';
import { ProductInterceptor } from 'src/common/interceptors/product.interceptor';
import { extname } from 'path';

@ApiTags('Product')
@Controller('products')
export class ProductController {

  constructor(
    private readonly productService: ProductService
  ) { }


  // ============================ Product ===================================

  // @Roles(Role.ADMIN, Role.MEMBER)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @ApiOkResponse(ApiProductCreateOkResponse)
  // @ApiBadRequestResponse(ApiProductCreateBadRequestResponse)
  // @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  // @Post()
  // async createProduct(@Body() createProductDto: CreateProductDto) {
  //   try {
  //     const payload: ProductEntity = await this.productService.createProduct(createProductDto);
  //     return requestOkResponse<ProductEntity>(payload)
  //   } catch (error) {
  //     return requestErrorResponse(400, "create product was error")
  //   }
  // }
  // @Roles(Role.ADMIN, Role.MEMBER)
  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(FileInterceptor('images'))
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 10 },
  ], {
    storage: diskStorage({
      destination: './public/uploaded/images/products',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
        const extension = extname(file.originalname);
        cb(null, `${randomName}${extension}`);
      },
    }),
  }))
  @Post()
  async createProduct(
    @UploadedFiles() files,
    @Body() body,
  ) {
    try {
      const product: CreateProductDto = JSON.parse(body.product)
      const payload: ProductEntity = await this.productService.createProduct(product);
     
      const productId = payload.id;

      // ... Create a new product image for each uploaded file ...
      for (const file of files.images) {
        const { originalname, size, filename } = file;
        await this.productService.createProductImage({
          productId,
          image: filename,
          // originalname,
          // size,
        });
      }
      return requestOkResponse<any>(product);
    } catch (error) {
      return requestErrorResponse(400, 'create product was error');
    }
  }

  @ApiOkResponse(ApiProductGetAllOkRespose)
  @ApiBadRequestResponse(ApiProductGetImageBadRequestResponse)
  @Get()
  async findAllProduct(
    @Query('keyword') keyword: string,
    @Query('name') name: string,
    @Query('desc') desc: string,
    @Query('price') price: string,
    @Query('groupDataId') groupId: string,
    @Query('categoryId') categoryId: string,

  ): Promise<ProductArrayResponseType> {
    try {
      const payload: ProductArrayType = await this.productService.findAllProduct({ keyword, name, desc, price, groupId, categoryId });
      return requestOkResponse<ProductArrayType>(payload);
    } catch (error) {
      return requestErrorResponse(400, "get all product was failed")
    }
  }


  // @Get('/group/colorschemes')
  // async findAllColorSchemeRelateProduct(
  //   @Param('id') gid: string,
  // ): Promise<ProductArrayResponseType> {
  //   try {
  //     const payload: ProductArrayType = await this.productService.findAllColorSchemeRelateProduct();
  //     return requestOkResponse<ProductArrayType>(payload);
  //   } catch (error) {
  //     return requestErrorResponse(400, "get all product was failed")
  //   }
  // }
  

  @ApiOkResponse(ApiProductGetAllOkRespose)
  @ApiBadRequestResponse(ApiProductGetImageBadRequestResponse)
  @Get('/group/manage/:id')
  async findAllProductByGroupForManage(
    @Param('id') gid: string,
  ): Promise<ProductArrayResponseType> {
    try {
      const payload: ProductArrayType = await this.productService.findAllProductByGroupForManage(gid);
      return requestOkResponse<ProductArrayType>(payload);
    } catch (error) {
      return requestErrorResponse(400, "get all product was failed")
    }
  }
  
  @ApiOkResponse(ApiProductGetAllOkRespose)
  @ApiBadRequestResponse(ApiProductGetImageBadRequestResponse)
  @Get('/group/:id')
  async findAllProductByUser(
    @Param('id') gid: string,
  ): Promise<ProductArrayResponseType> {
    try {
      const payload: ProductArrayType = await this.productService.findAllProductByGroup(gid);
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

  @Get('view/:id')
  async view(@Param('id') id: string): Promise<any> {
    try {
      const payload: any = await this.productService.increaseReloadCount(id);
      return requestOkResponse<any>(payload)
    } catch (error) {
      return requestErrorResponse(400, "get one product was failed")
    }
  }


  @UseGuards(JwtAuthGuard)
  @ApiUnauthorizedResponse(ApiCommonUnauthorizedException)
  @ApiOkResponse(ApiProductUpdateOkResponse)
  @ApiBadRequestResponse(ApiProductUpdateBadRequestResponse)
  @ApiParam(ApiProductParam)
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 10 },
  ], {
    storage: diskStorage({
      destination: './public/uploaded/images/products',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
        const extension = extname(file.originalname);
        cb(null, `${randomName}${extension}`);
      },
    }),
  }))
  @Patch(':id/data')
  async updateProduct(
    @Param('id') id: string,
    @Body() body,
    @UploadedFiles() files,
  ) {
    try {
      const product: CreateProductDto = JSON.parse(body.product)
     
      const payload: number[] = await this.productService.updateProduct(id, product);
      // console.log(files.images)
      if (files) {
        // ... Create a new product image for each uploaded file ...
        for (const file of files.images) {
          const {filename } = file;
          await this.productService.createProductImage({
            productId: id,
            image: filename,
          });
        }
      }
      // console.log("product")
      // console.log(id)
    
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
  @Delete('delete-product/:id')
  async removeProduct(@Param('id') id: string) {
    try {
      
      const payload: number = await this.productService.removeProduct(id);
      return requestOkResponse<number>(payload);
    } catch (error) {
      console.error(error)
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
  @Delete('/:productId/images/:id')
  async removeProductImage(
    @Param('id') id: string,
    @Param('productId') productId: string
  ): Promise<DeleteProductImageResponseType> {
    try {
      const payload: number = await this.productService.removeProductImage(id, productId);

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
