import { Controller, Get } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/interfaces/access.interface';

@Controller()
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Roles(Role.unprotected)
  @Get('/healthcheck')
  async healthcheckStatus(): Promise<ReturnType<HealthcheckService['getServices']>> {
    return this.healthcheckService.getServices();
  }
}
