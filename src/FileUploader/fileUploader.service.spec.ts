import { Test, TestingModule } from '@nestjs/testing';
import { FileUploaderService } from './fileUploader.service';

describe('FileUploaderService', () => {
  let service: FileUploaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileUploaderService],
    }).compile();

    service = module.get<FileUploaderService>(FileUploaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
