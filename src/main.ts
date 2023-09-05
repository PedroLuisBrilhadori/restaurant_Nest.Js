import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';

async function bootstrap() {
  const app = await NestFactory.create(RestaurantModule);
  await app.listen(3000);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )
}
bootstrap();
