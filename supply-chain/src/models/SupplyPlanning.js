import mongoose from 'mongoose';

const SupplyPlanningSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  orderPoint: {
    type: Number,
    required: true,
  },
  maxLevel: {
    type: Number,
    required: true,
  },
  leadTime: {
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

export default mongoose.models.SupplyPlanning || mongoose.model('SupplyPlanning', SupplyPlanningSchema);
