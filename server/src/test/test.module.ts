import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { UploadModule } from '../upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [TestController],
})
export class TestModule {}
