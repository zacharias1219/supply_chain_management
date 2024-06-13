import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Risk from '../../../models/Risk';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { description, category, impact, likelihood, mitigationPlan } = req.body;
    const updatedRisk = await Risk.findByIdAndUpdate(id, { description, category, impact, likelihood, mitigationPlan }, { new: true });
    res.status(200).json(updatedRisk);
  } else if (req.method === 'DELETE') {
    await Risk.findByIdAndDelete(id);
    res.status(204).end();
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
