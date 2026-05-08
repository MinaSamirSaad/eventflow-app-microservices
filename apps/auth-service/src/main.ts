import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { SERVICES_PORTS } from '@app/common';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  // Enable validation
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }
  ));
  await app.listen(process.env.port ?? SERVICES_PORTS.AUTH_SERVICE);
  console.log(`Listening on port ${process.env.port ?? SERVICES_PORTS.AUTH_SERVICE}`);
}
bootstrap();
