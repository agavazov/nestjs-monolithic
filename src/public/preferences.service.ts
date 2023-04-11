import { Injectable } from '@nestjs/common';
import { Preferences } from './interfaces/preferences.interface';

@Injectable()
export class PreferencesService {
  async getAll(): Promise<Preferences> {
    return {
      serviceType: 'web',
      inMaintenance: false,
      maintenanceMessage: null,
      requireUpdate: false,
      appConfig: {
        title: 'nestjs-monolithic',
      },
    };
  }
}
