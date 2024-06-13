import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Route from '../../../models/Route';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { startingPoint, destination, waypoints, distance, estimatedTime } = req.body;
    const updatedRoute = await Route.findByIdAndUpdate(id, { startingPoint, destination, waypoints, distance, estimatedTime }, { new: true });
    res.status(200).json(updatedRoute);
  } else if (req.method === 'DELETE') {
    await Route.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
