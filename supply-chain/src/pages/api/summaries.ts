import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/mongoose';
import Inventory from '../../models/Inventory';
import Supplier from '../../models/Supplier';
import Route from '../../models/Route';
import Cost from '../../models/Cost';
import Risk from '../../models/Risk';
import RealTime from '../../models/RealTime';
import Sustainability from '../../models/Sustainability';
import Demand from '../../models/Demand';
import SupplyChain from '../../models/SupplyChain';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const inventory = await Inventory.countDocuments();
  const suppliers = await Supplier.countDocuments();
  const routes = await Route.countDocuments();
  const costs = await Cost.countDocuments();
  const risks = await Risk.countDocuments();
  const realTime = await RealTime.countDocuments();
  const sustainability = await Sustainability.countDocuments();
  const demand = await Demand.countDocuments();
  const supplyChain = await SupplyChain.countDocuments();

  res.status(200).json({
    inventory,
    suppliers,
    routes,
    costs,
    risks,
    realTime,
    sustainability,
    demand,
    supplyChain,
  });
};

export default handler;
