import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { WebhookSignatureValidator } from '../../../ingestion/collection/webhooks/webhook-signature-validator.interface';

@Injectable()
export class JiraWebhookValidator implements WebhookSignatureValidator {
  // TODO: Implement validate
  async validate(
    req: Request,
    rawBody: Buffer,
    secret: string,
  ): Promise<boolean> {
    return false;
  }

  // TODO: Implement getEventType
  getEventType(req: Request): string {
    return '';
  }
}
