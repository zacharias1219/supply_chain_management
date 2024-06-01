// src/pages/api/inventory.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getInventory, createInventoryItem } from '../../services/inventoryManagement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const inventory = await getInventory();
    res.status(200).json(inventory);
  } else if (req.method === 'POST') {
    const { name, quantity } = req.body;
    const newItem = await createInventoryItem(name, quantity);
    res.status(201).json(newItem);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
