// src/pages/api/inventory.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getInventory } from '../../services/inventoryManagement';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getInventory());
}
