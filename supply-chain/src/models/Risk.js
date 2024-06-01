// src/models/Risk.js
import mongoose from 'mongoose';

const RiskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Risk || mongoose.model('Risk', RiskSchema);
