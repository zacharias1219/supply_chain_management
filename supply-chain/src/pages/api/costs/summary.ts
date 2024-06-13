import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Cost from '../../../models/Cost';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const totalCost = await Cost.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: "$amount" },
      },
    },
  ]);

  const mostSignificantCosts = await Cost.find().sort({ amount: -1 }).limit(5);

  res.status(200).json({
    totalCost: totalCost[0]?.total || 0,
    mostSignificantCosts,
  });
};

export default handler;
