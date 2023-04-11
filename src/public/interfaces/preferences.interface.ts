export interface Preferences {
  serviceType: 'test' | 'mobile' | 'web';
  inMaintenance: boolean;
  maintenanceMessage: null | string;
  requireUpdate: boolean;
  appConfig: {
    [key: string]: any;
  };
}
