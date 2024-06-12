import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Inventory from '../../../models/Inventory';
import Order from '../../../models/Order';
import Delivery from '../../../models/Delivery';
import OpenAI from 'openai';
import { ClientOptions } from 'openai';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const inventoryData = await Inventory.find({});
  const orderData = await Order.find({});
  const deliveryData = await Delivery.find({});

  const dataDescriptions = `
    Inventory Data: ${JSON.stringify(inventoryData, null, 2)}
    Order Data: ${JSON.stringify(orderData, null, 2)}
    Delivery Data: ${JSON.stringify(deliveryData, null, 2)}
  `;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
} as ClientOptions);
const aiResponse = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Create a beautiful visualization for the following data:\n\n${dataDescriptions}`,
    max_tokens: 300,
});

res.status(200).json({ visualization: aiResponse.choices[0].text });
};

export default handler;
