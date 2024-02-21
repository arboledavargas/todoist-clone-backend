import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  await app.listen(3000);
  console.log('🚁 Airdropping the server excellence ➡ localhost:3000! Prepare for lift-off! ✈️')
}
bootstrap();
