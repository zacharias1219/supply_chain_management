// src/models/Cost.js
import mongoose from 'mongoose';

const CostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Cost || mongoose.model('Cost', CostSchema);
