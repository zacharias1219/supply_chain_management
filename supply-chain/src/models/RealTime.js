import mongoose from 'mongoose';

const RealTimeSchema = new mongoose.Schema({
  metric: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.RealTime || mongoose.model('RealTime', RealTimeSchema);
