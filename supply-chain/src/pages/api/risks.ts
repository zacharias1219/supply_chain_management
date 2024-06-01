// src/pages/api/risks.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getRisks, createRisk } from '../../services/riskManagement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const risks = await getRisks();
    res.status(200).json(risks);
  } else if (req.method === 'POST') {
    const { description } = req.body;
    const newRisk = await createRisk(description);
    res.status(201).json(newRisk);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
