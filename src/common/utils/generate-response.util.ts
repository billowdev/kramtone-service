import { REQUEST_ERROR, REQUEST_FAIL, REQUEST_SUCCESS } from "../constants/response-status.constant"
import { RequestResponseType } from "../types/response.common.types"

export const requestOkResponse = <T>(payload: T): RequestResponseType<T> => {
	// should be return the object of RequestResponseType
	// T is a generic type for RequestResponseType
	//  this fuction must have recieve payload value
	return {
		status: REQUEST_SUCCESS,
		payload,
		error: null
	}
}

export const requestFailResponse = <T>(code: number, message: string, payload?: T | null): RequestResponseType<T> => {
	// should be return the object of RequestResponseType
	// T is a generic type for RequestResponseType
	// this fuction must have code and message value
	// payload is optional
	if (!payload) {
		const response: RequestResponseType<T> = {
			status: REQUEST_FAIL,
			payload: null,
			error: { code, message }
		}
		return response
	} else {
		const response: RequestResponseType<T> = {
			status: REQUEST_FAIL,
			payload,
			error: { code, message }
		}
		return response
	}
}

export const requestErrorResponse = <T>(code: number, message: string): RequestResponseType<T> => {
	// should be return the object of RequestResponseType
	// T is a generic type for RequestResponseType
	// this fuction must have code and message value
	return {
		status: REQUEST_ERROR,
		payload: null,
		error: { code, message }
	}
}

