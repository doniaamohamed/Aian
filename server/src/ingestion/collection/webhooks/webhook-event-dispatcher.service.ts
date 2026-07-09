import { Injectable, Logger } from '@nestjs/common';
import { RawProviderEventRepository } from '../../repositories/raw-provider-event.repository';
import { ProviderClientFactory } from '../../../integrations/provider-client.factory';

/**
 * Dispatches a verified webhook payload to the appropriate provider adapter
 * to extract normalized knowledge items.
 */
@Injectable()
export class WebhookEventDispatcherService {
  private readonly logger = new Logger(WebhookEventDispatcherService.name);

  constructor(
    private readonly rawEventRepository: RawProviderEventRepository,
    private readonly providerFactory: ProviderClientFactory,
  ) {}

  /**
   * Processes the verified webhook.
   * 1. Stores the raw payload for audit/replay.
   * 2. Passes it to the ProviderAdapter for normalization.
   * 3. Sends extracted items to the ingestion pipeline.
   */
  async dispatch(
    connectionId: string,
    provider: string,
    eyeType: string,
    payload: any,
  ) {
    try {
      // 1. Store the raw event
      await this.rawEventRepository.create({
        connectionId,
        provider,
        eyeType,
        providerEventType: 'webhook', // Could be inferred by the adapter later
        payload,
      });

      this.logger.debug(`Stored raw webhook event for connection ${connectionId}`);

      // 2. Pass to adapter to extract normalized items
      const adapter = this.providerFactory.getAdapter(provider);
      
      // We wrap the payload in the expected input format for the adapter.
      // A full implementation will call adapter.normalizeWebhookEvent(...) 
      // or similar when we implement the adapter interface fully.
      
      // For Phase 5, we are just stubbing the dispatch flow.
      this.logger.debug(`Dispatched webhook to ${provider} adapter for connection ${connectionId}`);

      // 3. (In Phase 6) We will call BaseCollectorService to process the results
    } catch (error) {
      this.logger.error(`Error dispatching webhook event: ${(error as Error).message}`, (error as Error).stack);
      throw error;
    }
  }
}
