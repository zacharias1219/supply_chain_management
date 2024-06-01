// src/pages/api/sustainability.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSustainabilityData } from '../../services/sustainabilityTracking';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getSustainabilityData());
}
