// src/services/realTimeMonitoring.ts
import connectToDatabase from '../lib2/mongoose';
import Monitoring from '../models/Monitoring';

export async function getMonitoringData() {
  await connectToDatabase();
  return Monitoring.find({});
}

export async function createMonitoringItem(description: string, status: string) {
  await connectToDatabase();
  const monitoringItem = new Monitoring({ description, status });
  return monitoringItem.save();
}
