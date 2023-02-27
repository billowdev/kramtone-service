export type ErrorDto = {
	code: number;
	message: string;
}

export type RequestResponseType<T> = {
	status: string;
	payload: T | null;
	error: ErrorDto | null;
}

