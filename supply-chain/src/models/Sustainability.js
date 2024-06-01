// src/models/Sustainability.js
import mongoose from 'mongoose';

const SustainabilitySchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  impact: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Sustainability || mongoose.model('Sustainability', SustainabilitySchema);
