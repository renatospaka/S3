import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('S3 File Up/Download')
    return 'S3 File Up/Download';
  }
}
