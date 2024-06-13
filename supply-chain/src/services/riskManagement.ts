// src/services/riskManagement.ts
import connectToDatabase from '../lib2/mongoose';
import Risk from '../models/Risk';

export async function getRisks() {
  await connectToDatabase();
  return Risk.find({});
}

export async function createRisk(description: string) {
  await connectToDatabase();
  const risk = new Risk({ description });
  return risk.save();
}
