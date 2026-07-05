import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api/v1');

  const port = parseInt(process.env.PORT ?? '1234', 10);
  await app.listen(port);

  logger.log(`🚀 Server running on http://localhost:${port}/api/v1`);
  logger.log(
    `🏥 Health check available at http://localhost:${port}/api/v1/health`,
  );
}

bootstrap();
