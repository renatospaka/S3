import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('appModule já era...');
  const app = await NestFactory.create(AppModule);
  await app.listen(45500);
}
bootstrap();

console.log('appModule já era...'); 
