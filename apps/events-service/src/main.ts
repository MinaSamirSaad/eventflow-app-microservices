import { NestFactory } from '@nestjs/core';
import { EventsServiceModule } from './events-service.module';
import { SERVICES_PORTS } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(EventsServiceModule);
  // Enable validation
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }
  ));
  await app.listen(process.env.port ?? SERVICES_PORTS.EVENTS_SERVICE);
  console.log(`🚀 Events Service is running on port ${process.env.port ?? SERVICES_PORTS.EVENTS_SERVICE}`);
}
bootstrap();
