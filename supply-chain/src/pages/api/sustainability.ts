// src/pages/api/sustainability.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSustainabilityData, createSustainabilityItem } from '../../services/sustainabilityTracking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const sustainabilityData = await getSustainabilityData();
    res.status(200).json(sustainabilityData);
  } else if (req.method === 'POST') {
    const { description, impact } = req.body;
    const newSustainabilityItem = await createSustainabilityItem(description, impact);
    res.status(201).json(newSustainabilityItem);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
