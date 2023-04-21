import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FormDataInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    if (req.headers['content-type'] && req.headers['content-type'].startsWith('multipart/form-data')) {
      const formData = new FormData();
      for (const key in req.body) {
        formData.append(key, req.body[key]);
      }
      req.body = formData;
    }
    return next.handle().pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
