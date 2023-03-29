import { ApiBodyOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { GroupDataEntity } from "./entities/group-data.entity";

export const ApiGroupBody: ApiBodyOptions = {
	description: "Group create body",
	type: GroupDataEntity
}

export const ApiGroupCreatedOkResponse: ApiResponseOptions = {
	description: "Group create ok response",
	type: GroupDataEntity
}

export const ApiGroupCreatedBadRequestResponse: ApiResponseOptions = {
	description: "Group create bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}

export const ApiGroupGetAllOkResponse: ApiResponseOptions = {
	description: "Group get all was successfully",
	type: GroupDataEntity,
	isArray: true
}
export const ApiGroupGetAllBadRequestResponse: ApiResponseOptions = {
	description: "Group get all bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}

export const ApiGroupGetOneParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your Group id that you want to request data',
	example: '21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}

export const ApiGroupGetOneOkResponse: ApiResponseOptions = {
	description: "Group get one was successfully",
	type: GroupDataEntity
}
export const ApiGroupGetOneBadRequestResponse: ApiResponseOptions = {
	description: "Group get one bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}

export const ApiGroupUpdateParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your Group id that you want to update data',
	example: '21b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}

export const ApiGroupUpdateOkResponse: ApiResponseOptions = {
	description: "Group update was successfully",
}
export const ApiGroupUpdateBadRequestResponse: ApiResponseOptions = {
	description: "Group update bad request response",
	schema: {
		example: {
			statusCode: 400,
			message: "bad request"
		}
	}
}