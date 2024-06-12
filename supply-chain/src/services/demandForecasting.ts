// src/services/demandForecasting.ts
import { Configuration, OpenAIApi } from 'openai';
import connectToDatabase from '../lib2/mongoose';
import DemandForecast from '../models/DemandForecast';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function getDemandForecasting(prompt: string): Promise<string> {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
  });
  return response.data.choices[0].text.trim();
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
