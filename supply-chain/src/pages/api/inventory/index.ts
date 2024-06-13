import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Inventory from '../../../models/Inventory';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    const inventoryItems = await Inventory.find({});
    res.status(200).json(inventoryItems);
  } else if (req.method === 'POST') {
    const { name, quantity, description, category } = req.body;
    const newItem = new Inventory({ name, quantity, description, category });
    await newItem.save();
    res.status(201).json(newItem);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;
