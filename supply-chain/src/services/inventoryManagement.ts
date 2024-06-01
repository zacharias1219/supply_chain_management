// src/services/inventoryManagement.ts
import connectToDatabase from '../lib/mongoose';
import Inventory from '../models/Inventory';

export async function getInventory() {
  await connectToDatabase();
  return Inventory.find({});
}

export async function createInventoryItem(name: string, quantity: number) {
  await connectToDatabase();
  const inventoryItem = new Inventory({ name, quantity });
  return inventoryItem.save();
}
