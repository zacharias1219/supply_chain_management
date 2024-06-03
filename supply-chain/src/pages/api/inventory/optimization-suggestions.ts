import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Inventory from '../../../models/Inventory';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const slowMovingItems = await Inventory.aggregate([
    { $match: { quantity: { $gt: 50 } } },
    { $project: { name: 1, quantity: 1, category: 1 } },
  ]);

  const overstockItems = await Inventory.aggregate([
    { $match: { quantity: { $gt: 100 } } },
    { $project: { name: 1, quantity: 1, category: 1 } },
  ]);

  res.status(200).json({
    slowMovingItems,
    overstockItems,
  });
};

export default handler;
