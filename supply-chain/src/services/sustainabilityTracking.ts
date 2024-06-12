// src/services/sustainabilityTracking.ts
import connectToDatabase from '../lib2/mongoose';
import Sustainability from '../models/Sustainability';

export async function getSustainabilityData() {
  await connectToDatabase();
  return Sustainability.find({});
}

export async function createSustainabilityItem(description: string, impact: string) {
  await connectToDatabase();
  const sustainabilityItem = new Sustainability({ description, impact });
  return sustainabilityItem.save();
}
