import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Vega Books Store')
    .setDescription(
      '<center><b>Projet system repartis</b></center>'
      '<center><b>Sera mise a jours</b></center>'
    )
    .setVersion('2.3')
    .addTag('Vega')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}
bootstrap();
