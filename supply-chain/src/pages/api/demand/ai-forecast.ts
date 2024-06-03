import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib/mongoose';
import Sales from '../../../models/Sales';
import OpenAI from 'openai';
import { ClientOptions } from 'openai';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

    const salesData = await Sales.find({});
    const salesDescriptions = salesData.map(data => `Product: ${data.product}, Quantity: ${data.quantity}, Date: ${data.date}`).join('\n');

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
} as ClientOptions);

    const aiResponse = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: `Analyze the following sales data and provide demand forecasts:\n\n${salesDescriptions}`,
        max_tokens: 300,
    });

    res.status(200).json({ forecast: aiResponse.choices[0].text });
};

export default handler;
