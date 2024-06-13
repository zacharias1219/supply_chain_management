import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Sustainability from '../../../models/Sustainability';
import OpenAI from 'openai';
import { ClientOptions } from 'openai';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
await connectToDatabase();

const sustainabilityData = await Sustainability.find({});
const dataDescriptions = sustainabilityData.map(data => `Metric: ${data.metric}, Value: ${data.value}`).join('\n');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
    } as ClientOptions);
const aiResponse = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: `Analyze the following sustainability data and suggest potential sustainable methods:\n\n${dataDescriptions}`,
    max_tokens: 300,
});

res.status(200).json({ suggestions: aiResponse.choices[0].text });
};

export default handler;
