// src/services/costOptimization.ts
import connectToDatabase from '../lib2/mongoose';
import Cost from '../models/Cost';

export async function getCosts() {
  await connectToDatabase();
  return Cost.find({});
}

export async function createCost(description: string, amount: number) {
  await connectToDatabase();
  const cost = new Cost({ description, amount });
  return cost.save();
}
