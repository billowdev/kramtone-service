import { ApiParamOptions, ApiResponseOptions } from '@nestjs/swagger';

export const ApiProductParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your product id that you want to request or update or delete the data',
	example: '51b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}

export const ApiProductCreateBadRequestResponse: ApiResponseOptions = {
	description: "The response when product create failed",
	schema: {
		example: {
			"statusCode": 400,
			"message": [
				"name should not be empty",
				"name must be a string",
				"price should not be empty",
				"price must be a string",
				"userId should not be empty",
				"userId must be a string",
				"categoryId should not be empty",
				"categoryId must be a number conforming to the specified constraints"
			],
			"error": "Bad Request"
		}
	}
}

export const ApiProductCreateOkResponse: ApiResponseOptions = {
	description: "The response when product create successfully",
	schema: {
		example: {
			"status": "success",
			"payload": {
				"createdAt": "2022-12-13T04:38:46.917Z",
				"updatedAt": "2022-12-13T04:38:46.917Z",
				"id": "0055e896-d2a9-4552-a54c-9c0e2c828589",
				"name": "ผ้าคราม",
				"price": "400.00",
				"userId": "41b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				"categoryId": 1,
				"desc": null
			},
			"error": null
		}
	}
}

export const ApiProductGetOneOkResponse: ApiResponseOptions = {
	description: "The response when get one product successfully",
	schema: {
		example: {
			"status": "success",
			"payload": {
				"id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
				"name": "ผ้าพันคอ 2",
				"desc": "ผ้าคราม 2",
				"price": "200.00",
				"createdAt": "2022-12-11T03:39:21.526Z",
				"updatedAt": "2022-12-11T03:39:21.526Z",
				"category": {
					"id": 1,
					"name": "category 1"
				},
				"productImages": [
					{
						"id": "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
						"image": "default_image.png"
					},
					{
						"id": "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
						"image": "default_image.png"
					}
				],
				"user": {
					"id": "41b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
					"shopName": "Shop name",
					"phone": "0987654321",
					"image": "default_image.png"
				}
			},
			"error": null
		}
	}
}

export const ApiProductGetOneBadRequestResponse: ApiResponseOptions = {
	description: "The response when get one product failed",
	schema: {
		example: {
			"status": "error",
			"payload": null,
			"error": {
				"code": 400,
				"message": "get one product was failed"
			}
		}
	}
}


export const ApiProductGetAllOkRespose: ApiResponseOptions = {
	description: "The response when get all product successfully",
	schema: {
		example: [
			{
				"status": "success",
				"payload": {
					"id": "51b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
					"name": "ผ้าพันคอ 2",
					"desc": "ผ้าคราม 2",
					"price": "200.00",
					"createdAt": "2022-12-11T03:39:21.526Z",
					"updatedAt": "2022-12-11T03:39:21.526Z",
					"category": {
						"id": 1,
						"name": "category 1"
					},
					"productImages": [
						{
							"id": "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
							"image": "default_image.png"
						},
						{
							"id": "61b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
							"image": "default_image.png"
						}
					],
					"user": {
						"id": "41b4f7c2-b221-4a6b-a0e3-d7ec80e011a1",
						"shopName": "Shop name",
						"phone": "0987654321",
						"image": "default_image.png"
					}
				},
				"error": null
			}
		]
	}
}

export const ApiProductGetAllBadRequestResponse: ApiResponseOptions = {
	description: "The response when get all product failed",
	schema: {
		example: {
			"status": "error",
			"payload": null,
			"error": {
				"code": 400,
				"message": "get all product was failed"
			}
		}
	}

}

export const ApiProductUpdateOkResponse: ApiResponseOptions = {}
export const ApiProductUpdateBadRequestResponse: ApiResponseOptions = {}
export const ApiProductDeleteOkResponse: ApiResponseOptions = {}
export const ApiProductDeleteBadRequestResponse: ApiResponseOptions = {}


export const ApiProductGetImageOkResponse: ApiResponseOptions = {}
export const ApiProductGetImageBadRequestResponse: ApiResponseOptions = {}
