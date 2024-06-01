// src/models/Supplier.js
import mongoose from 'mongoose';

const SupplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Supplier || mongoose.model('Supplier', SupplierSchema);
