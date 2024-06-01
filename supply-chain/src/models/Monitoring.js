// src/models/Monitoring.js
import mongoose from 'mongoose';

const MonitoringSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Monitoring || mongoose.model('Monitoring', MonitoringSchema);
