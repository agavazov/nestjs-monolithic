export interface Healthcheck {
  services: {
    service: string;
    isHealthy: boolean;
  }[];
  status: 'health' | 'sick';
}
