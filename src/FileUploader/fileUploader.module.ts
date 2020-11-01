import { Module } from '@nestjs/common';
import { FileUploaderController } from './fileUploader.controller';
import { FileUploaderService } from './fileUploader.service';

@Module({
  controllers: [FileUploaderController],
  providers: [FileUploaderService]
})
export class FileUploaderModule {}
