import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
.setTitle('natural indigo tone  restful api')
.setDescription('natural indigo tone restful api')
.setVersion('1.0')
.addBearerAuth()
.setContact('GitHub-Repository', 'https://github.com/billowdev/web-app-natural-indigo-tone', '')
.build();