import { NestFactory } from '@nestjs/core';
require('dotenv').config();
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => console.log(`Server started on ${port}`));
}
bootstrap();
