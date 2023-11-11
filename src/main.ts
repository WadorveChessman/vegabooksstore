import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Vega Books Store')
    .setDescription(`
      <div style="text-align: center;">
        <b>Projet système réparti</b>
        <p>informatique niveau IV</p>
      </div>
    `)
    .setVersion('2.3')
    .addTag('Vega')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}
bootstrap();
