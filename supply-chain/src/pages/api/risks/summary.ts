import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Risk from '../../../models/Risk';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const totalRisks = await Risk.countDocuments();
  const criticalRisks = await Risk.find({ impact: { $gte: 7 } }).sort({ impact: -1 }).limit(5);

  res.status(200).json({
    totalRisks,
    criticalRisks,
  });
};

export default handler;
