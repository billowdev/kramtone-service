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
import { AdminCreateUserDto } from '../dto/admin-create-user';

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
			console.log(error)
			return requestErrorResponse(400, "signup failed")
		}
	}

	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Post('create')
	@ApiBody(ApiUserBody)
	@ApiOkResponse(ApiUserCreatedOkResponse)
	@ApiBadRequestResponse(ApiUserCreatedBadRequestResponse)
	async create(@Body() createUserDto: AdminCreateUserDto): Promise<CreateUserResponseType> {
		let response: CreateUserResponseType
		try {
			const payload: UserEntity = await this.userService.adminCreate(createUserDto);
			if (payload) {
				response = requestOkResponse(payload)
			} else {
				return requestFailResponse(400, "create user was failed")
			}
		} catch (error) {
			console.log(error)
			return requestErrorResponse(400, "create user was error");
		}
		return response
	}


	@Roles(Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@ApiOkResponse(ApiUserGetAllOkResponse)
	@ApiBadRequestResponse(ApiUserGetAllBadRequestResponse)
	@Get('/get')
	async findAll(
		@Query() queryParams: string,
	) {
		// queryParams['keyword'], queryParams['page'], queryParams['pageSize']
		const response =  await this.userService.findAll(queryParams['keyword'], queryParams['page'], queryParams['pageSize']);
		// console.log(response)
		return requestOkResponse(response)
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

	@Roles(Role.MEMBER, Role.ADMIN)
	@UseGuards(JwtAuthGuard, RolesGuard)
	@Patch(':id')
	async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Request() req: RequestWithAuth) {
		try {
			
			if(req.user.role === Role.ADMIN) {
				// console.log("========== status ============= ")
				// console.log(updateUserDto)
				const payload = await this.userService.update(id, updateUserDto);
				return requestOkResponse<number[]>(payload)
			}else{
				if(updateUserDto.activated){
					delete updateUserDto.activated
				}
				if(updateUserDto.removed){
					delete updateUserDto.removed
				}
				if(updateUserDto.role){
					delete updateUserDto.role
				}
				const payload = await this.userService.update(id, updateUserDto);
				return requestOkResponse<number[]>(payload)

			}
			// console.log(updateUserDto)
		} catch (error) {
			// console.log(error)
			return requestErrorResponse(400, error)
		}
	}

	@Delete('delete/:id')
	async remove(@Param('id') id: string) {
		return await this.userService.remove(id);
	}
}
