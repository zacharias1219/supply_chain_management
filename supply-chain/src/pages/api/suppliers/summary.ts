import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Supplier from '../../../models/Supplier';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const totalSuppliers = await Supplier.countDocuments();
  const categories = await Supplier.distinct('category');
  const recentSuppliers = await Supplier.find().sort({ createdAt: -1 }).limit(5);

  res.status(200).json({
    totalSuppliers,
    categories,
    recentSuppliers,
  });
};

export default handler;
