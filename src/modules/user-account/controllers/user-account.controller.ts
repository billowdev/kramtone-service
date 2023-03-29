import { Controller, Get, Post, Body, Patch, Request, Param, Delete, UseGuards, HttpCode, HttpStatus, BadRequestException, Req, Query } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user-account.dto';
import { UpdateUserDto } from '../dto/update-user-account.dto';
import { UserService } from '../services/user-account.service';
import { requestOkResponse, requestErrorResponse } from './../../../common/utils/generate-response.util';
import { RequestResponseType } from '../../../common/types/response.common.types';
import { ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignDto } from '../dto/sign.dto';
import { SignUpDto } from './../dto/signup-user-account.dto';
import { JwtAuthGuard, LocalGuard, RolesGuard, UserIsExist } from '../../../common/guards';
import { ApiUserBody, ApiUserCreatedBadRequestResponse, ApiUserCreatedOkResponse, ApiUserGetAllBadRequestResponse, ApiUserGetAllOkResponse, ApiUserGetOneBadRequestResponse, ApiUserGetOneOkResponse, ApiUserGetOneParam, ApiUserSessionBadRequestResponse, ApiUserSessionOkResponse, ApiUserSignInBadRequestResponse, ApiUserSignInBody, ApiUserSignInOkResponse, ApiUserSignUpBadRequestResponse, ApiUserSignUpBody, ApiUserSignUpOkResponse } from '../user-account.document';
import { LoginDto, RequestWithAuth } from '../dto/login.dto';
import { Roles } from '../../../common/decorators/roles.decorator';
import { Role } from '../types/role.enum';
import { CreateUserResponseType } from '../types/user-account.types';
import { requestFailResponse } from '../../../common/utils/generate-response.util';
import { UserEntity } from '../entities/user-account.entity';
import { TokenDto } from '../dto/token.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@ApiOkResponse(ApiUserSessionOkResponse)
	@ApiResponse(ApiUserSessionBadRequestResponse)
	@UseGuards(JwtAuthGuard)
	@Get('session')
	async session(
		@Request() req: RequestWithAuth
	): Promise<RequestResponseType<TokenDto>> {
		try {
			const refreshToken: TokenDto = await this.userService.refreshToken(req.user)
			return requestOkResponse<TokenDto>(refreshToken)
		} catch (error) {
			throw new BadRequestException()
		}
	}

	@ApiOkResponse(ApiUserSignInOkResponse)
	@ApiBody(ApiUserSignInBody)
	@ApiBadRequestResponse(ApiUserSignInBadRequestResponse)
	@UseGuards(LocalGuard)
	@HttpCode(HttpStatus.OK)
	@Post('signin')
	async signin(@Body() dto: LoginDto): Promise<RequestResponseType<string | SignDto>> {
		try {
			const payload: string | SignDto = await this.userService.signin(dto);

			return requestOkResponse<string | SignDto>(payload)
		} catch (error) {
			return requestErrorResponse(400, "sign in was failed")
		}
	}

	@ApiOkResponse(ApiUserSignUpOkResponse)
	@ApiBadRequestResponse(ApiUserSignUpBadRequestResponse)
	@ApiBody(ApiUserSignUpBody)
	@UseGuards(UserIsExist)
	@Post('signup')
	async signup(@Body() dto: SignUpDto): Promise<RequestResponseType<SignDto>> {
		try {
			const payload: SignDto = await this.userService.signup(dto);
			return requestOkResponse<SignDto>(payload)
		} catch (error) {
			return requestErrorResponse(400, "signup failed")
		}
	}

	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Post()
	@ApiBody(ApiUserBody)
	@ApiOkResponse(ApiUserCreatedOkResponse)
	@ApiBadRequestResponse(ApiUserCreatedBadRequestResponse)
	async create(@Body() createUserDto: CreateUserDto): Promise<CreateUserResponseType> {
		let response: CreateUserResponseType
		try {
			const payload: UserEntity = await this.userService.create(createUserDto);
			if (payload) {
				response = requestOkResponse(payload)
			} else {
				return requestFailResponse(400, "create user was failed")
			}
		} catch (error) {
			return requestErrorResponse(400, "create user was error");
		}
		return response
	}


	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiOkResponse(ApiUserGetAllOkResponse)
	@ApiBadRequestResponse(ApiUserGetAllBadRequestResponse)
	@Get('/get')
	findAll(
		@Query() queryParams: string,
	) {
		// queryParams['keyword'], queryParams['page'], queryParams['pageSize']
		return this.userService.findAll(queryParams['keyword'], queryParams['page'], queryParams['pageSize']);
	}

	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiParam(ApiUserGetOneParam)
	@ApiOkResponse(ApiUserGetOneOkResponse)
	@ApiBadRequestResponse(ApiUserGetOneBadRequestResponse)
	@Get('/get/:id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(id);
	}

	@Roles(Role.MEMBER, Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiParam(ApiUserGetOneParam)
	@ApiOkResponse(ApiUserGetOneOkResponse)
	@ApiBadRequestResponse(ApiUserGetOneBadRequestResponse)
	@Get('/me')
	async requestProfile(@Req() req: RequestWithAuth): Promise<any> {
		const sub = req.user.sub;
		const payload: UserEntity = await this.userService.findOne(sub);
		return requestOkResponse<UserEntity>(payload)
	}


	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(id, updateUserDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove(id);
	}
}
