import mongoose from 'mongoose';

const ShippingLogisticsSchema = new mongoose.Schema({
  shipmentId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  cost: {
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

export default mongoose.models.ShippingLogistics || mongoose.model('ShippingLogistics', ShippingLogisticsSchema);
