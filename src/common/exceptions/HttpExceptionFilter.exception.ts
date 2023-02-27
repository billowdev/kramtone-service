import { ExceptionFilter, HttpException, ArgumentsHost } from '@nestjs/common';
import { REQUEST_ERROR } from 'src/common/constants/response-status.constant';


export class HttpExceptionFilter implements ExceptionFilter {

	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse();
		const request = ctx.getRequest();

		if (exception['code'] == 'ENOENT') {
			response.status(400).json({
				status: REQUEST_ERROR,
				payload: null,
				error: {
					code: 400,
					message: 'no such file or directory',
				}
			});
		} else {
			response.status(exception.getStatus()).json({
				status: REQUEST_ERROR,
				payload: null,
				error: {
					code: exception.getStatus(),
					message: exception.getResponse()['message']
				}
			});
		}

	}
}

