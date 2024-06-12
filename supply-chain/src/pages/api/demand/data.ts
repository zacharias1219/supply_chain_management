import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Sales from '../../../models/Sales';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const salesData = await Sales.find({});

  res.status(200).json(salesData);
};

export default handler;
