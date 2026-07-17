import { Module } from '@nestjs/common';
import { JiraAuthController } from './controllers/jira-auth.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [JiraAuthController],
})
export class JiraModule {}
