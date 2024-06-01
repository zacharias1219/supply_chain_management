// src/pages/api/costs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getCosts } from '../../services/costOptimization';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getCosts());
}
