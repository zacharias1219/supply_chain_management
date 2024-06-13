import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Risk from '../../../models/Risk';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  if (req.method === 'GET') {
    const risks = await Risk.find({});
    res.status(200).json(risks);
  } else if (req.method === 'POST') {
    const { description, category, impact, likelihood, mitigationPlan } = req.body;
    const newRisk = new Risk({ description, category, impact, likelihood, mitigationPlan });
    await newRisk.save();
    res.status(201).json(newRisk);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
