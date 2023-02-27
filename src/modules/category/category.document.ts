import { ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";

export const ApiCategoryCreatedOkResponse: ApiResponseOptions = {
	description: 'Responsee when category created successfully',
	schema: {
		example: {
			"status": "success",
			"payload": {
				"createdAt": "2022-12-07T11:35:23.081Z",
				"updatedAt": "2022-12-07T11:35:23.081Z",
				"id": 4,
				"name": "test.png",
				"desc": "category 1",
				"image": null
			},
			"error": null
		}
	}
}

export const ApiCategoryCreatedBadRequestResponse: ApiResponseOptions = {
	description: 'Response when category created failed',
	schema: {
		example: {
			"statusCode": 400,
			"message": [
				"name should not be empty",
				"name must be a string"
			],
			"error": "Bad Request"
		}
	}
}

export const ApiCategoryParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your category id that you want to request, update, delete, data',
	example: 2
}

export const ApiCategoryGetOneOkResponse: ApiResponseOptions = {
	description: 'Response when category get one successfully',
	schema: {
		example: {
			"status": "success",
			"payload": {
				"id": 1,
				"name": "test.png",
				"desc": "category 1",
				"image": "test.png",
				"createdAt": "2022-12-06T05:03:48.478Z",
				"updatedAt": "2022-12-06T05:03:48.478Z"
			},
			"error": null
		}
	}
}
export const ApiCategoryGetOneBadRequestResponse: ApiResponseOptions = {
	description: 'Response when category get one failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "get one category was failed"
			}
		}
	}
}

export const ApiCategoryGetAllOkResponse: ApiResponseOptions = {
	description: 'Response when category get all successfully',
	schema: {
		example: [{
			"status": "success",
			"payload": {
				"id": 1,
				"name": "test.png",
				"desc": "category 1",
				"image": "test.png",
				"createdAt": "2022-12-06T05:03:48.478Z",
				"updatedAt": "2022-12-06T05:03:48.478Z"
			},
			"error": null
		}]
	}
}
export const ApiCategoryGetAllBadRequestResponse: ApiResponseOptions = {
	description: 'Response when category get all failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "get all category was failed"
			}
		}
	}
}

export const ApiCategoryUpdateOkResponse: ApiResponseOptions = {
	description: 'Response when category update successfully',
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
export const ApiCategoryUpdateBadRequestResponse: ApiResponseOptions = {
	description: 'Response when category update failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "update category was failed"
			}
		}
	}
}


export const ApiCategoryDeleteOkResponse: ApiResponseOptions = {}
export const ApiCategoryDeleteBadRequestResponse: ApiResponseOptions = {
	description: 'Response when category delete failed',
	schema: {
		example: {
			"status": "fail",
			"payload": null,
			"error": {
				"code": 400,
				"message": "delete category was failed"
			}
		}
	}
}

export const ApiCategoryUploadedImageOkResponse: ApiResponseOptions = {
	description: 'upload image was successfuly',
	schema: {
		example: {
			"message": "uploaded file was successfuly",
			"fileName": "uuid-imagefilename.png"
		}
	}
}
export const ApiCategoryUploadedImageBadRequestResponse: ApiResponseOptions = {
	description: 'Error image format not valid',
	schema: {
		example: {
			"statusCode": 400,
			"message": "upload image was failed",
			"error": "Bad Request"
		}
	}
}