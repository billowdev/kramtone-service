import { ApiBodyOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { ColorSchemeEntity } from "./entities/color-scheme.entity";

export const ApiColorSchemeCreatedBody: ApiBodyOptions = {
	description: 'The body for created ColorScheme',
	type: ColorSchemeEntity
}


export const ApiColorSchemeCreatedOkResponse: ApiResponseOptions = {
	description: 'Response when ColorScheme is successfully created',
	status: 200,
	schema: {
		example: {
			"status": "success",
			"payload": {
				"id": "SK1-1140",
				"cname": "Light Blue",
				"cnameth": "ฟ้าอ่อน",
				"hex": "#78BAC3",
				"red": "120",
				"green": "186",
				"blue": "198"
			},
			"error": null
		}
	}
}

export const ApiColorSchemeCreatedBadRequestResponse: ApiResponseOptions = {
	description: 'The response when ColorScheme create failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "create indigo tone was failed"
			}
		}
	}
}


export const ApiColorSchemeBulkCreatedBody: ApiBodyOptions = {
	description: 'The body for bulk creat ColorScheme',
	type: ColorSchemeEntity,
	isArray: true
}


export const ApiColorSchemeBulkCreatedOkResponse: ApiResponseOptions = {
	description: 'Response when ColorScheme is successfully created',
	status: 200,
	schema: {
		example: [
			{
				"status": "success",
				"payload": {
					"id": "SK1-60",
					"cname": "Light Blue",
					"cnameth": "ฟ้าอ่อน",
					"hex": "#78BAC3",
					"red": "120",
					"green": "186",
					"blue": "198"
				},
				"error": null
			}
		]
	}
}

export const ApiColorSchemeBulkCreatedBadRequestResponse: ApiResponseOptions = {
	description: 'The response when ColorScheme create failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "bulk create indigo tone was failed"
			}
		}
	}
}


export const ApiColorSchemeIdParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your ColorScheme id that you want to request, update, delete',
	example: 'SK1-60'
}

export const ApiColorSchemeGetOneOkResponse: ApiResponseOptions = {
	description: 'The response when ColorScheme get one successfully',
	schema: {
		example: {
			"status": "success",
			"payload": {
				"id": "SK1-60",
				"cname": "Light Blue",
				"cnameth": "ฟ้าอ่อน",
				"hex": "#78BAC6",
				"red": "120",
				"green": "186",
				"blue": "198"
			},
			"error": null
		}
	}
}

export const ApiColorSchemeGetOneBadRequestResponse: ApiResponseOptions = {
	description: 'The response when ColorScheme get one failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "get one indigo tone was failed"
			}
		}
	}
}

export const ApiColorSchemeGetAllOkResponse: ApiResponseOptions = {
	description: 'The response when indigo tone get all successfully',
	schema: {
		example: [{
			"status": "success",
			"payload": {
				"id": "SK1-60",
				"cname": "Light Blue",
				"cnameth": "ฟ้าอ่อน",
				"hex": "#78BAC6",
				"red": "120",
				"green": "186",
				"blue": "198"
			},
			"error": null
		}]
	}
}

export const ApiColorSchemeGetAllBadRequestResponse: ApiResponseOptions = {
	description: 'The response when indigo tone get all failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "get all indigo tone was failed"
			}
		}
	}
}

export const ApiColorSchemeUpdateOkResponse: ApiResponseOptions = {
	description: 'The response when indigo tone update successfully',
	schema: {
		example: {
			"status": "success",
			"payload": [
				1
			],
			"error": null
		}
	}
}

export const ApiColorSchemeUpdateBadRequestResponse: ApiResponseOptions = {
	description: 'The response when ColorScheme update failed',
	schema: {
		example: {
			"status": "error",
			"payload": null,
			"error": {
				"code": 400,
				"message": "update indigo tone was error"
			}
		}
	}
}


export const ApiColorSchemeDeleteOkResponse: ApiResponseOptions = {
	description: 'The response when indigo tone delete successfully',
	schema: {
		example: {
			"status": "success",
			"payload": 1,
			"error": null
		}
	}
}

export const ApiColorSchemeDeleteBadRequestResponse: ApiResponseOptions = {
	description: 'The response when ColorScheme delete failed',
	schema: {
		example: {
			"status": "error",
			"payload": null,
			"error": {
				"code": 400,
				"message": "delete indigo tone was error"
			}
		}
	}
}