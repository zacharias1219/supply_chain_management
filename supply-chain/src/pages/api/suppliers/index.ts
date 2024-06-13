import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Supplier from '../../../models/Supplier';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    const suppliers = await Supplier.find({});
    res.status(200).json(suppliers);
  } else if (req.method === 'POST') {
    const { name, contactInfo, address, category } = req.body;
    const newSupplier = new Supplier({ name, contactInfo, address, category });
    await newSupplier.save();
    res.status(201).json(newSupplier);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
