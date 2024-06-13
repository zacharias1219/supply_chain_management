import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Route from '../../../models/Route';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const totalRoutes = await Route.countDocuments();
  const longestRoute = await Route.find().sort({ distance: -1 }).limit(1);
  const shortestRoute = await Route.find().sort({ distance: 1 }).limit(1);

  res.status(200).json({
    totalRoutes,
    longestRoute: longestRoute[0] || null,
    shortestRoute: shortestRoute[0] || null,
  });
};

export default handler;
