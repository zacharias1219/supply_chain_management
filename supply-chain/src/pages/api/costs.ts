// src/pages/api/costs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getCosts, createCost } from '../../services/costOptimization';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const costs = await getCosts();
    res.status(200).json(costs);
  } else if (req.method === 'POST') {
    const { description, amount } = req.body;
    const newCost = await createCost(description, amount);
    res.status(201).json(newCost);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
