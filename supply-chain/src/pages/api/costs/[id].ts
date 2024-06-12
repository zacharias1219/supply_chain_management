import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Cost from '../../../models/Cost';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { description, amount, category, date } = req.body;
    const updatedCost = await Cost.findByIdAndUpdate(id, { description, amount, category, date }, { new: true });
    res.status(200).json(updatedCost);
  } else if (req.method === 'DELETE') {
    await Cost.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
