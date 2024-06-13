import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Supplier from '../../../models/Supplier';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { name, contactInfo, address, category } = req.body;
    const updatedSupplier = await Supplier.findByIdAndUpdate(id, { name, contactInfo, address, category }, { new: true });
    res.status(200).json(updatedSupplier);
  } else if (req.method === 'DELETE') {
    await Supplier.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
