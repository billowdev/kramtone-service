import { ApiResponseOptions } from "@nestjs/swagger";

export const ApiCommonUnauthorizedException: ApiResponseOptions = {
	description: 'User Unauthorized ',
	schema: {
		example: {
			"statusCode": 401,
			"message": "Unauthorized"
		}
	}
}