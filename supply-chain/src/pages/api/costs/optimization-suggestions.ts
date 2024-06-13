import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Cost from '../../../models/Cost';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const recurringHighCosts = await Cost.aggregate([
    {
      $group: {
        _id: "$description",
        total: { $sum: "$amount" },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
    {
      $sort: { total: -1 },
    },
  ]);

  res.status(200).json(recurringHighCosts);
};

export default handler;
