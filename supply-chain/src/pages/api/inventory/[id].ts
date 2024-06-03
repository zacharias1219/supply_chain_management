import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Inventory from '../../../models/Inventory';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { name, quantity, description, category } = req.body;
    const updatedInventoryItem = await Inventory.findByIdAndUpdate(id, { name, quantity, description, category }, { new: true });
    res.status(200).json(updatedInventoryItem);
  } else if (req.method === 'DELETE') {
    await Inventory.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
