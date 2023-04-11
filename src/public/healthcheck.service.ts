import { Injectable } from '@nestjs/common';
import { Healthcheck } from './interfaces/healthcheck.interface';

@Injectable()
export class HealthcheckService {
  async getServices(): Promise<Healthcheck> {
    const services: Healthcheck['services'] = [];

    // Check mongo db - store
    services.push({
      service: 'MongoDB - Store',
      isHealthy: true, // This is a demo
    });

    // Check each service for the global health status
    const isHealthy = !services.find((item) => !item.isHealthy);

    // Response
    return {
      services,
      status: isHealthy ? 'health' : 'sick',
    };
  }
}
