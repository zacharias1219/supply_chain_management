import OpenAI from 'openai';
import connectToDatabase from '../lib2/mongoose';
import DemandForecast from '../models/DemandForecast';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getDemandForecasting(prompt: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
  });
  return response.choices[0]?.message?.content?.trim() || '';
}

export async function saveDemandForecast(prompt: string, forecast: string) {
  await connectToDatabase();
  const newForecast = new DemandForecast({ prompt, forecast });
  return newForecast.save();
}

export async function getSavedForecasts() {
  await connectToDatabase();
  return DemandForecast.find({});
}
