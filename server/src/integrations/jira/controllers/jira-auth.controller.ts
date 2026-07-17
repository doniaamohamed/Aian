import { Controller, Get, NotImplementedException } from '@nestjs/common';

@Controller('integrations/jira')
export class JiraAuthController {
  @Get('install')
  install() {
    throw new NotImplementedException();
  }

  @Get('callback')
  callback() {
    throw new NotImplementedException();
  }
}
