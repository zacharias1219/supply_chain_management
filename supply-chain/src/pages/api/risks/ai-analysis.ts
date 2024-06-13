import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../lib2/mongoose';
import Risk from '../../../models/Risk';
import OpenAI from 'openai';
import { ClientOptions } from 'openai';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDatabase();

    const risks = await Risk.find({});
    const riskDescriptions = risks.map(risk => risk.description).join('\n');

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    } as ClientOptions);
    const aiResponse = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: `Analyze the following risks and suggest potential risks or improvements:\n\n${riskDescriptions}`,
        max_tokens: 150,
    });

    res.status(200).json({ analysis: aiResponse.choices[0].text });
  res.status(200).json({ analysis: aiResponse.choices[0].text });
};

export default handler;
