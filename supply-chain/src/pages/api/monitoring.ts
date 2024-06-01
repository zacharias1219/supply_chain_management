// src/pages/api/monitoring.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getMonitoringData, createMonitoringItem } from '../../services/realTimeMonitoring';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const monitoringData = await getMonitoringData();
    res.status(200).json(monitoringData);
  } else if (req.method === 'POST') {
    const { description, status } = req.body;
    const newMonitoringItem = await createMonitoringItem(description, status);
    res.status(201).json(newMonitoringItem);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
