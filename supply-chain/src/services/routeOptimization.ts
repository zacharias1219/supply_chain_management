// src/services/routeOptimization.ts
import connectToDatabase from '../lib2/mongoose';
import Route from '../models/Route';

export async function getRoutes() {
  await connectToDatabase();
  return Route.find({});
}

export async function createRoute(description: string) {
  await connectToDatabase();
  const route = new Route({ description });
  return route.save();
}
