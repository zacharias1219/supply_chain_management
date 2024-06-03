import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import SupplyPlanning from '../../../models/SupplyPlanning';
import ProductionPlanning from '../../../models/ProductionPlanning';
import VendorManagement from '../../../models/VendorManagement';
import ShippingLogistics from '../../../models/ShippingLogistics';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const supplyPlanningData = await SupplyPlanning.find({});
  const productionPlanningData = await ProductionPlanning.find({});
  const vendorManagementData = await VendorManagement.find({});
  const shippingLogisticsData = await ShippingLogistics.find({});

  res.status(200).json({
    supplyPlanningData,
    productionPlanningData,
    vendorManagementData,
    shippingLogisticsData,
  });
};

export default handler;
