import { ApiBodyOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { SignDto } from "./dto/sign.dto";
import { UserEntity } from "./entities/user-account.entity";


export const ApiUserSessionOkResponse: ApiResponseOptions = {
	description: 'Get session was successfuly',
	type: SignDto
}

export const ApiUserSessionBadRequestResponse: ApiResponseOptions = {
	description: 'Get session was failed',
	schema: {
		example: {
			"statusCode": 401,
			"message": "Unauthorized"
		}
	},
	status: 401
}

export const ApiUserSignInOkResponse: ApiResponseOptions = {
	description: 'user sign in was successfuly',
	type: SignDto
}

export const ApiUserSignInBadRequestResponse: ApiResponseOptions = {
	description: 'sign in was failed',
	schema: {
		example: {
			statusCode: 400,
			message: "sign in was failed",
			error: "Bad Request"
		}
	}
}
export const ApiUserSignInBody: ApiBodyOptions = {
	description: 'The body of user for signin',
	schema: {
		example: {
			"username": "billowdev",
			"password": "yourpassword1234",
		}
	}
}


export const ApiUserSignUpOkResponse: ApiResponseOptions = {
	description: 'user sign up was successfuly',
	type: SignDto
}

export const ApiUserSignUpBadRequestResponse: ApiResponseOptions = {
	description: 'sign up was failed',
	schema: {
		example: {
			statusCode: 400,
			message: "sign up was failed",
			error: "Bad Request"
		}
	}
}

export const ApiUserSignUpBody: ApiBodyOptions = {
	description: 'The body of user for sign up',
	schema: {
		example: {
			"username": "billowdev",
			"password": "yourpassword",
		}
	}
}


export const ApiUserBody: ApiBodyOptions = {
	description: "user create body",
	type: UserEntity
}

export const ApiUserCreatedOkResponse: ApiResponseOptions = {
	description: "user create ok response",
	type: UserEntity
}

export const ApiUserCreatedBadRequestResponse: ApiResponseOptions = {
	description: "user create bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}

export const ApiUserGetAllOkResponse: ApiResponseOptions = {
	description: "user get all was successfully",
	type: UserEntity,
	isArray: true
}
export const ApiUserGetAllBadRequestResponse: ApiResponseOptions = {
	description: "user get all bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}

export const ApiUserGetOneParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your user id that you want to request data',
	example: '21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}

export const ApiUserGetOneOkResponse: ApiResponseOptions = {
	description: "user get one was successfully",
	type: UserEntity
}
export const ApiUserGetOneBadRequestResponse: ApiResponseOptions = {
	description: "user get one bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}

export const ApiUserUpdateParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your user id that you want to update data',
	example: '21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}

export const ApiUserUpdateOkResponse: ApiResponseOptions = {
	description: "user update was successfully",
}
export const ApiUserUpdateBadRequestResponse: ApiResponseOptions = {
	description: "user update bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}