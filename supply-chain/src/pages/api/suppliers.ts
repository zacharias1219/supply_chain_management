// src/pages/api/suppliers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSuppliers } from '../../services/supplierManagement';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(getSuppliers());
}
