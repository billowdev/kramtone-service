import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Query, Req, Request, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetSession } from '../../../common/decorators/auth.decorator';
import { Roles } from '../../../common/decorators/roles.decorator';
import { JwtAuthGuard, RolesGuard } from '../../../common/guards';
import { Role } from '../../user-account/types/role.enum';
import { CreateGroupDto } from '../dto/create-group-data.dto';
import { UpdateGroupDto } from '../dto/update-group-data.dto';
import { GroupDataService } from '../services/group-data.service';
import { CreateGroupDataResponseType, GetAllGroupDataResponseType, GroupDataArrayType } from '../types/group-data.types';
import { requestErrorResponse, requestFailResponse, requestOkResponse } from './../../../common/utils/generate-response.util';
import { GroupDataEntity } from './../entities/group-data.entity';
import { ApiGroupBody, ApiGroupGetImageBadRequestResponse, ApiGroupGetImageOkResponse } from '../group-data.document';
import { SessionDto } from '../../user-account/dto/session.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { updateGroupFileName } from '../../../common/utils/update-file-name.util';
import { imageFileFilter } from '../../../common/utils/image-file-filter.util';

@ApiTags('Groups')
@Controller('groups')
export class GroupDataController {
  constructor(private readonly groupDataService: GroupDataService) { }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBody(ApiGroupBody)
  @Post()
  async create(@Body() createGroupDto: CreateGroupDto): Promise<CreateGroupDataResponseType> {
    try {
      const payload: GroupDataEntity = await this.groupDataService.create(createGroupDto);
      return requestOkResponse<GroupDataEntity>(payload);
    } catch (error) {
      return requestErrorResponse(400, "create group was errors");
    }
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/admin/get')
  async adminFindAll(@Query() queryParams) {
    const { keywords, page, pageSize } = queryParams
    return this.groupDataService.adminFindAll(keywords, page, pageSize);
  }

  @Get('/get')
  async findAll(): Promise<GetAllGroupDataResponseType> {
    try {
      const payload: GroupDataArrayType = await this.groupDataService.findAll();
      return requestOkResponse<GroupDataArrayType>(payload);
    } catch (error) {
      return requestFailResponse(400, 'get all group was failed');
    }
  }

  @Get('/get/:id')
  async findOne(@Param('id') id: string) {
    try {
      const payload: GroupDataEntity = await this.groupDataService.findOne(id);
      return requestOkResponse<GroupDataEntity>(payload);
    } catch (error) {
      return requestFailResponse(400, 'get group by id was failed');
    }
  }

  // @Roles(Role.MEMBER, Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(FileInterceptor('logoFile', {
  //   storage: diskStorage({
  //     destination: './public/uploaded/images/groups',
  //     filename: updateGroupFileName,
  //   }),
  //   fileFilter: imageFileFilter
  // }))

  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logoFile', maxCount: 1 },
      { name: 'bannerFile', maxCount: 1 },
    ], {
      storage: diskStorage({
        destination: './public/uploaded/images/groups',
        filename: updateGroupFileName,
      }),
      fileFilter: imageFileFilter
    })
  )
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body('groupData') groupData: UpdateGroupDto,
    @UploadedFiles() file: {
      logoFile?: Express.Multer.File,
      bannerFile?: Express.Multer.File,
    },
    @GetSession() user: SessionDto) {
    try {
      const updateData = JSON.parse(`${groupData}`);
    
      let logoName, bannerName
      if (file.logoFile) {
        logoName = file.logoFile[0].filename
      } 
      if(file.bannerFile){
        bannerName = file.bannerFile[0].filename
      }
 
      const updateGroupData = {
        ...updateData,
        logo: logoName?? null,
        banner: bannerName ?? null
      }

      const payload: number[] = await this.groupDataService.update(id, updateGroupData, user);
      if (payload[0] === 1) {
        return requestOkResponse<number[]>(payload);
      } else if (payload[0] === 403) {
        return requestFailResponse(403, 'update group data was failed, forbidden resource')
      }

      return requestOkResponse<number[]>(payload);

    } catch (error) {
      console.log(error)
      return requestErrorResponse(400, 'something went wrong can\'t update group data');
    }
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    try {
      const payload: number = await this.groupDataService.remove(id);
      return requestOkResponse<number>(payload);
    } catch (error) {
      return requestFailResponse(400, 'delete group was failed')
    }
  }

  @ApiOkResponse(ApiGroupGetImageOkResponse)
  @ApiBadRequestResponse(ApiGroupGetImageBadRequestResponse)
  @Get('/images/:image_name')
  requestImages(@Param('image_name') image, @Res() res) {
    res.sendFile(image, { root: './public/uploaded/images/groups' });
  }



}
