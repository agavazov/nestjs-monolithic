import { Module } from '@nestjs/common';
import { WelcomeController } from './welcome.controller';
import { HealthcheckController } from './healthcheck.controller';
import { HealthcheckService } from './healthcheck.service';
import { PreferencesService } from './preferences.service';
import { PreferencesController } from './preferences.controller';

@Module({
  imports: [],
  controllers: [
    WelcomeController,
    HealthcheckController,
    PreferencesController,
  ],
  providers: [HealthcheckService, PreferencesService],
})
export class PublicModule {}
