import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploaderService } from './fileUploader.service';
//import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('exam')
export class FileUploaderController {
  constructor(private s3Serice: FileUploaderService) {}

  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Body('name') name, 
    @UploadedFile() file: any
  ) {
    return await this.uploadFile(name, file);
  }
}
