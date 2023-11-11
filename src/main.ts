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
        <p>Informatique niveau IV</p>
        <p>UNAF</p>
      </div>
    `)
    .setVersion('2.3')
    .addTag('Vega')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Personnalisation de l'apparence de SwaggerUI
  const customOptions = {
    customCss: `
      .swagger-ui .topbar { text-align: center; }
      .swagger-ui .info .title { text-align: center; }
      .swagger-ui .info .description { text-align: center; }
    `,
    customSiteTitle: 'Vega Books Store 2.3', // Titre stylisé
  };

  SwaggerModule.setup('api', app, document, customOptions);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}

bootstrap();
