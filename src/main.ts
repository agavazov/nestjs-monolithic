import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(
    // For this pipe config you will need 'class-validator' & 'class-transformer' packages
    new ValidationPipe({
      transform: true, // Enable DTO transformations
      whitelist: true, // Remove non declared DTO data

      // Debug mode
      enableDebugMessages: true,
      disableErrorMessages: false,

      // Log and return same errors - not the best idea for production
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        console.error('exceptionFactory.errors', validationErrors);
        return new BadRequestException(validationErrors);
      },
    }),
  );

  // Start the server
  await app.listen(8080);
  console.log('Application is running on: http://127.0.0.1:8080');
}

bootstrap().catch(console.error);
