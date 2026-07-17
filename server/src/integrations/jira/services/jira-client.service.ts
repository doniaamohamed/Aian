import { Injectable, NotImplementedException } from '@nestjs/common';
import {
  ProviderClient,
  ProviderConnection,
  ConnectionVerificationResult,
  ProviderResource,
  RefreshedCredentials,
} from '../../contracts';

@Injectable()
export class JiraClientService implements ProviderClient {
  // TODO: Implement verifyConnection
  async verifyConnection(connection: ProviderConnection): Promise<ConnectionVerificationResult> {
    throw new NotImplementedException();
  }

  // TODO: Implement getResources
  async getResources(connection: ProviderConnection): Promise<ProviderResource[]> {
    throw new NotImplementedException();
  }

  // TODO: Implement refreshCredentials
  async refreshCredentials(connection: ProviderConnection): Promise<RefreshedCredentials> {
    throw new NotImplementedException();
  }
}
