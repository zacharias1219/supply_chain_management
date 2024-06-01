// src/pages/api/suppliers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSuppliers, createSupplier } from '../../services/supplierManagement';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const suppliers = await getSuppliers();
    res.status(200).json(suppliers);
  } else if (req.method === 'POST') {
    const { name } = req.body;
    const newSupplier = await createSupplier(name);
    res.status(201).json(newSupplier);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
