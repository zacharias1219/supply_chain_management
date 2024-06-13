import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Risk from '../../../models/Risk';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const highLikelihoodRisks = await Risk.find({ likelihood: { $gte: 7 } }).sort({ likelihood: -1 });
  const highImpactRisks = await Risk.find({ impact: { $gte: 7 } }).sort({ impact: -1 });

  res.status(200).json({
    highLikelihoodRisks,
    highImpactRisks,
  });
};

export default handler;
