import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { decryptAES } from '../utils/aes-encrypt.util';

@Injectable()
export class DecryptInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<string> {
		const request = context.switchToHttp().getRequest();
		const encryptData = request.body.encrypt;

		// Decrypt the encrypt data
		const decrypted: string = decryptAES(encryptData)

		// Set the decrypted data on the request body
		request.body = decrypted;

		// Return the modified request
		return next.handle().pipe(
			map(data => {
				return data;
			}),
		);
	}
}
