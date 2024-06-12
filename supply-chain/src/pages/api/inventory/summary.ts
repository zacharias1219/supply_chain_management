import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Inventory from '../../../models/Inventory';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const totalItems = await Inventory.countDocuments();
  const categories = await Inventory.distinct('category');
  const lowStockItems = await Inventory.find({ quantity: { $lt: 10 } });

  res.status(200).json({
    totalItems,
    categories,
    lowStockItems,
  });
};

export default handler;
