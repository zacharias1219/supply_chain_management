// src/pages/api/routes.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getRoutes, createRoute } from '../../services/routeOptimization';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const routes = await getRoutes();
    res.status(200).json(routes);
  } else if (req.method === 'POST') {
    const { description } = req.body;
    const newRoute = await createRoute(description);
    res.status(201).json(newRoute);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
