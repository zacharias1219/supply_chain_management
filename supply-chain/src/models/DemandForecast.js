// src/models/DemandForecast.js
import mongoose from 'mongoose';

const DemandForecastSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  forecast: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.DemandForecast || mongoose.model('DemandForecast', DemandForecastSchema);
