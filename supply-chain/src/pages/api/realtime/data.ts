import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Inventory from '../../../models/Inventory';
import Order from '../../../models/Order';
import Delivery from '../../../models/Delivery';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const inventoryData = await Inventory.find({});
  const orderData = await Order.find({});
  const deliveryData = await Delivery.find({});

  res.status(200).json({
    inventoryData,
    orderData,
    deliveryData,
  });
};

export default handler;
