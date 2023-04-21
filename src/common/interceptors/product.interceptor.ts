import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateProductDto } from 'src/modules/product/dto/create-product.dto';

@Injectable()
export class ProductInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const productData: CreateProductDto = request.body.product;
    request.body = productData;
    return next.handle().pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
