import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Sustainability from '../../../models/Sustainability';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const sustainabilityData = await Sustainability.find({});

  res.status(200).json(sustainabilityData);
};

export default handler;
