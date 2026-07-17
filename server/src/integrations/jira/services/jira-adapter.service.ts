import { Injectable } from '@nestjs/common';
import {
  ProviderAdapter,
  ProviderEventInput,
  KnowledgeItem,
} from '../../contracts';

@Injectable()
export class JiraAdapterService implements ProviderAdapter {
  // TODO: Implement normalizeEvent
  normalizeEvent(input: ProviderEventInput): KnowledgeItem[] {
    return [];
  }

  // TODO: Implement getIdempotencyKey
  getIdempotencyKey(item: KnowledgeItem): string {
    return '';
  }

  // TODO: Implement getExternalResourceId
  getExternalResourceId(input: ProviderEventInput): string {
    return '';
  }

  // TODO: Implement getExternalEventId
  getExternalEventId(input: ProviderEventInput): string | null {
    return null;
  }
}
