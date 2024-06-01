// src/pages/api/risks.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getRisks } from '../../services/riskManagement';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getRisks());
}
