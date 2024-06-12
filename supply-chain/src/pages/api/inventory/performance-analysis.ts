import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Supplier from '../../../models/Supplier';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  // Example analysis. Adjust metrics as needed.
  const performanceAnalysis = await Supplier.aggregate([
    {
      $project: {
        name: 1,
        onTimeDeliveryRate: 1,
        qualityScore: 1,
        costEffectiveness: 1,
        overallPerformance: {
          $avg: ["$onTimeDeliveryRate", "$qualityScore", "$costEffectiveness"],
        },
      },
    },
    { $sort: { overallPerformance: -1 } },
  ]);

  res.status(200).json(performanceAnalysis);
};

export default handler;
