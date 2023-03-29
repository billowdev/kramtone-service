import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
	.setTitle('kramtone restful api')
	.setDescription('kramtone restful api')
	.setVersion('1.0')
	.addBearerAuth()
	.setContact('Akkarapon Phikulsri', 'https://github.com/billowdev/kramtone-service', 'akkarapon@billowdev.com')
	.build();