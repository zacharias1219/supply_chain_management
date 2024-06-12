import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Route from '../../../models/Route';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  // This is a simple example. You could implement more complex logic here.
  const optimizedRoutes = await Route.aggregate([
    {
      $group: {
        _id: "$startingPoint",
        totalDistance: { $sum: "$distance" },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
    {
      $sort: { totalDistance: 1 },
    },
  ]);

  res.status(200).json(optimizedRoutes);
};

export default handler;
