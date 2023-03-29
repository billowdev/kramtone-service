import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { ApiBody, ApiTags } from '@nestjs/swagger';
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
import { ApiGroupBody } from '../group-data.document';
import { SessionDto } from '../../user-account/dto/session.dto';

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

  @Roles(Role.MEMBER, Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto, @GetSession() user: SessionDto) {
    try {
      const payload: number[] = await this.groupDataService.update(id, updateGroupDto, user);
      if (payload[0] === 1) {
        return requestOkResponse<number[]>(payload);
      } else if (payload[0] === 403) {
        return requestFailResponse(403, 'update group data was failed, forbidden resource')
      }
    } catch (error) {
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
}
