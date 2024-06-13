import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Route from '../../../models/Route';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    const routes = await Route.find({});
    res.status(200).json(routes);
  } else if (req.method === 'POST') {
    const { startingPoint, destination, waypoints, distance, estimatedTime } = req.body;
    const newRoute = new Route({ startingPoint, destination, waypoints, distance, estimatedTime });
    await newRoute.save();
    res.status(201).json(newRoute);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
