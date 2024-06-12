import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Cost from '../../../models/Cost';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    const costs = await Cost.find({});
    res.status(200).json(costs);
  } else if (req.method === 'POST') {
    const { description, amount, category, date } = req.body;
    const newCost = new Cost({ description, amount, category, date });
    await newCost.save();
    res.status(201).json(newCost);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
