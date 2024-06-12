// src/services/supplierManagement.ts
import connectToDatabase from '../lib2/mongoose';
import Supplier from '../models/Supplier';

export async function getSuppliers() {
  await connectToDatabase();
  return Supplier.find({});
}

export async function createSupplier(name: string) {
  await connectToDatabase();
  const supplier = new Supplier({ name });
  return supplier.save();
}
