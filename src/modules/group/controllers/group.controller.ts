import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, BadRequestException } from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { GetSession } from 'src/common/decorators/auth.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard, RolesGuard } from 'src/common/guards';
import { Role } from 'src/modules/user/types/role.enum';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { GroupService } from '../services/group.service';
import { CreateGroupResponseType, GetAllGroupResponseType, GroupArrayType } from '../types/group.types';
import { requestErrorResponse, requestFailResponse, requestOkResponse } from './../../../common/utils/generate-response.util';
import { GroupEntity } from './../entities/group.entity';
import { ApiGroupBody } from './../group.document';
import { SessionDto } from 'src/modules/user/dto/session.dto';

@ApiTags('Groups')
@Controller('groups')
export class GroupController {
  constructor(private readonly groupService: GroupService) { }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBody(ApiGroupBody)
  @Post()
  async create(@Body() createGroupDto: CreateGroupDto): Promise<CreateGroupResponseType> {
    try {
      const payload: GroupEntity = await this.groupService.create(createGroupDto);
      return requestOkResponse<GroupEntity>(payload);
    } catch (error) {
      return requestErrorResponse(400, "create group was errors");
    }
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/admin/get')
  async adminFindAll(@Query() queryParams) {
    const { keywords, page, pageSize } = queryParams
    return this.groupService.adminFindAll(keywords, page, pageSize);
  }

  @Get('/get')
  async findAll(): Promise<GetAllGroupResponseType> {
    try {
      const payload: GroupArrayType = await this.groupService.findAll();
      return requestOkResponse<GroupArrayType>(payload);
    } catch (error) {
      return requestFailResponse(400, 'get all group was failed');
    }
  }

  @Get('/get/:id')
  async findOne(@Param('id') id: string) {
    try {
      const payload: GroupEntity = await this.groupService.findOne(id);
      return requestOkResponse<GroupEntity>(payload);
    } catch (error) {
      return requestFailResponse(400, 'get group by id was failed');
    }
  }

  @Roles(Role.USER, Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto, @GetSession() user: SessionDto) {
    try {
      const payload: number[] = await this.groupService.update(id, updateGroupDto, user);
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
      const payload: number = await this.groupService.remove(id);
      return requestOkResponse<number>(payload);
    } catch (error) {
      return requestFailResponse(400, 'delete group was failed')
    }
  }
}
