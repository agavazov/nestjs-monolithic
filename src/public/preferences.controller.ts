import { Controller, Get } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/interfaces/access.interface';

@Controller('/preferences')
export class PreferencesController {
  constructor(private readonly settingsService: PreferencesService) {}

  @Roles(Role.unprotected)
  @Get()
  async getPublicSettings(): Promise<ReturnType<PreferencesService['getAll']>> {
    return this.settingsService.getAll();
  }
}
