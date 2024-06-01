// src/pages/api/monitoring.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getMonitoringData } from '../../services/realTimeMonitoring';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getMonitoringData());
}
