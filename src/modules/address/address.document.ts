import { ApiBodyOptions, ApiParamOptions, ApiResponseOptions } from "@nestjs/swagger";
import { AddressEntity } from "./entities/address.entity";

export const ApiAddressCreateOkResponse: ApiResponseOptions = {
	description: 'Response when address is successfully created',
	status: 200,
	type: AddressEntity
}
export const ApiAddressCreateBadRequestResponse: ApiResponseOptions = {
	description: 'The response when address create failed',
	schema: {
		example: {
			statusCode: 400,
			message: "create address was failed",
			error: "Bad Request"
		}
	}
}
export const ApiAddressCreateBody: ApiBodyOptions = {
	description: 'The body of request for create address',
	schema: {
		example: {
			"houseNo": "111",
			"villageNo": "9",
			"village": "มะขามป้อม",
			"lane": "ซอยมะขามป้อม",
			"road": "ถนนมะขามป้อม",
			"subDistrict": "ตำบลมะขามป้อม",
			"district": "อำเภอมะขามป้อม",
			"province": "จังหวัดมะขามป้อม",
			"zipCode": "44499",
			"lat": "17.191668672743997",
			"lng": "104.09524272401283",
		}
	}
}


export const ApiAddressGetOneOkResponse: ApiResponseOptions = {
	description: "The response when get one address successfully",
	type: AddressEntity
}
export const ApiAddressGetOneBadRequestResponse: ApiResponseOptions = {
	description: 'The response when address get one failed',
	schema: {
		example: {
			statusCode: 400,
			message: "create address was failed",
			error: "Bad Request"
		}
	}
}
export const ApiAddressGetOneParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your address id that you want to request data',
	example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}

export const ApiAddressGetAllOkResponse: ApiResponseOptions = {
	description: "Response of get all address was successfully",
	schema: {
		example: {
			"status": "success",
			"payload": [
				{
					"id": "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a2",
					"houseNo": "222",
					"villageNo": "2",
					"village": "ผ้าคราม 2",
					"lane": "ซอยผ้าคราม 2",
					"road": "ถนนผ้าคราม 2",
					"subDistrict": "ตำบลผ้าคราม 2",
					"district": "อำเภอผ้าคราม 2",
					"province": "จังหวัดผ้าคราม 2",
					"zipCode": "44499",
					"lat": "17.191668672743997",
					"lng": "104.09524272401283",
					"createdAt": "2022-11-29T05:52:14.717Z",
					"updatedAt": "2022-11-29T05:52:14.717Z"
				},
				{
					"id": "31b4f7c2-b221-4a6b-a0e3-d7ec80e011a3",
					"houseNo": "333",
					"villageNo": "3",
					"village": "ผ้าคราม 3",
					"lane": "ซอยผ้าคราม 3",
					"road": "ถนนผ้าคราม 3",
					"subDistrict": "ตำบลผ้าคราม 3",
					"district": "อำเภอผ้าคราม 3",
					"province": "จังหวัดผ้าคราม 3",
					"zipCode": "44499",
					"lat": "17.191668672743997",
					"lng": "104.09524272401283",
					"createdAt": "2022-11-29T05:52:14.717Z",
					"updatedAt": "2022-11-29T05:52:14.717Z"
				}
			],
			"error": null
		}
	}
}
export const ApiAddressGetAllBadRequestResponse: ApiResponseOptions = {
	description: 'The response get all addresses was failed',
	schema: {
		example: {
			statusCode: 400,
			message: "get all addresses was failed",
			error: "Bad Request"
		}
	}
}

export const ApiAddressUpdateParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your address id that you want to update data',
	example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}
export const ApiAddressUpdateOkResponse: ApiResponseOptions = {
	description: 'The response when get one address successfully',
	status: 200,
	schema: {
		example: {
			"statusCode": 200,
			"message": "update address was successfuly",
		}
	}
}
export const ApiAddressUpdateBody: ApiBodyOptions = {
	description: 'The body of request for update address',
	schema: {
		example: {
			"houseNo": "111",
			"villageNo": "9",
			"village": "มะขามป้อม",
			"lane": "ซอยมะขามป้อม",
			"road": "ถนนมะขามป้อม",
			"subDistrict": "ตำบลมะขามป้อม",
			"district": "อำเภอมะขามป้อม",
			"province": "จังหวัดมะขามป้อม",
			"zipCode": "44499",
			"lat": "17.191668672743997",
			"lng": "104.09524272401283",
		}
	}
}
export const ApiAddressUpdateBadRequestResponse: ApiResponseOptions = {
	description: 'The response when update address failed',
	status: 400,
	schema: {
		example: {
			"statusCode": 400,
			"message": "update address was failed",
		}
	}
}


export const ApiAddressDeleteParam: ApiParamOptions = {
	name: 'id',
	description: 'Enter your address id that you want to delete data',
	example: '31b4f7c2-b221-4a6b-a0e3-d7ec80e011a1'
}
export const ApiAddressDeleteOkResponse: ApiResponseOptions = {}
export const ApiAddressDeleteBadRequestResponse: ApiResponseOptions = {}
