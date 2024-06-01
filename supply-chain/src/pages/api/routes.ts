// src/pages/api/routes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getRoutes } from '../../services/routeOptimization';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getRoutes());
}
