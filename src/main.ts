import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from "./common/config"
import { ValidationPipe } from '@nestjs/common';
import { CLIENT_URL_DEV, CLIENT_URL_DEV_2, CLIENT_URL_PROD, SERVEPORT } from './common/constants';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import { HttpExceptionFilter } from './common/exceptions/HttpExceptionFilter.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prefix = 'api/v1'
  app.setGlobalPrefix(prefix);
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(prefix, app, document);

  const corsWhitelist = [
    CLIENT_URL_DEV,
    CLIENT_URL_DEV_2,
    CLIENT_URL_PROD
  ]
  app.enableCors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || corsWhitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })
  // app.enableCors({
  //   credentials: true,
  //   origin: '*'
  // });
  

  // Use helmet to secure the app with various HTTP headers
  // app.use(helmet());

  // Limit the number of requests a client can make to the API
  // app.use(
  //   rateLimit({
  //     windowMs: 60 * 60 * 1000, // 15 minutes
  //     max: 300, // limit each IP to 100 requests per windowMs
  //   }),
  // );

  app.useGlobalFilters(new HttpExceptionFilter())


  // By default, Fastify listens only on the localhost 127.0.0.1 interface (read more). 
  // https://docs.nestjs.com/techniques/performance
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));

  // If you want to accept connections on other hosts, you should specify '0.0.0.0' in the listen() call:
  await app.listen(SERVEPORT, '0.0.0.0');

}
bootstrap();
