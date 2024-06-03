import mongoose from 'mongoose';

const DemandSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  forecastedQuantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Demand || mongoose.model('Demand', DemandSchema);
