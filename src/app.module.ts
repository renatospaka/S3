import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploaderModule } from './FileUploader/fileUploader.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FileUploaderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
