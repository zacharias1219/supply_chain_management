import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Inventory from '../../../models/Inventory';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    const inventoryItems = await Inventory.find({});
    res.status(200).json(inventoryItems);
  } else if (req.method === 'POST') {
    const { name, quantity, description, category } = req.body;
    const newInventoryItem = new Inventory({ name, quantity, description, category });
    await newInventoryItem.save();
    res.status(201).json(newInventoryItem);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
