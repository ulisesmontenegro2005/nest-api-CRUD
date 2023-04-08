import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Product Database App')
    .setDescription('This is a api that can Create, Read, Update and Delete products in memory.')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = 
  SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
