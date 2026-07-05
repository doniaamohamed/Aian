import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService, UploadCategory } from '../upload/upload.service';
import { EmailService } from '../email/email.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly emailService: EmailService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // Automatically extracts multipart/form-data field named 'file'
  async testUpload(
    @UploadedFile() file: Express.Multer.File,
    @Body('category') category?: string,
  ) {
    if (!file) {
      throw new BadRequestException(
        'A file is required. Please upload using the "file" form-data field.',
      );
    }

    const uploadCategory = (category as UploadCategory) || 'misc';
    const publicUrl = await this.uploadService.uploadFile(file, uploadCategory);

    return {
      success: true,
      message: 'File successfully uploaded via test endpoint',
      data: {
        originalName: file.originalname,
        mimeType: file.mimetype,
        sizeBytes: file.size,
        category: uploadCategory,
        url: publicUrl,
      },
    };
  }

  @Post('email')
  async testEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('body') body: string,
  ) {
    if (!to || !subject || !body) {
      throw new BadRequestException(
        'Please provide "to", "subject", and "body" in the JSON payload.',
      );
    }

    await this.emailService.sendBrandedEmail(to, subject, body);

    return {
      success: true,
      message: `Test email sent successfully to ${to}`,
    };
  }
}
