// src/services/realTimeMonitoring.ts
type MonitoringItem = {
    id: number;
    description: string;
    status: string;
  };
  
  const monitoringData: MonitoringItem[] = [
    { id: 1, description: 'Warehouse temperature', status: 'Normal' },
    { id: 2, description: 'Delivery vehicle status', status: 'On schedule' },
  ];
  
  export function getMonitoringData(): MonitoringItem[] {
    return monitoringData;
  }
  