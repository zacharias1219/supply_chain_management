import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Supplier from '../../../models/Supplier';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  // Example criteria for top suppliers. Adjust as needed.
  const topSuppliers = await Supplier.find().sort({ performanceScore: -1 }).limit(5);

  res.status(200).json(topSuppliers);
};

export default handler;
