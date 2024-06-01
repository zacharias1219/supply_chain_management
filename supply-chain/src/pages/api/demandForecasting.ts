// src/pages/api/demandForecasting.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getDemandForecasting, saveDemandForecast, getSavedForecasts } from '../../services/demandForecasting';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body;
    if (!prompt) {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    try {
      const forecast = await getDemandForecasting(prompt);
      await saveDemandForecast(prompt, forecast);
      res.status(200).json({ forecast });
    } catch (error) {
      res.status(500).json({ error: 'Failed to get demand forecasting' });
    }
  } else if (req.method === 'GET') {
    try {
      const forecasts = await getSavedForecasts();
      res.status(200).json(forecasts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve forecasts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
