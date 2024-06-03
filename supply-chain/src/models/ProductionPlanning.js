import mongoose from 'mongoose';

const ProductionPlanningSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  machinery: {
    type: String,
    required: true,
  },
  labor: {
    type: String,
    required: true,
  },
  wip: {
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

export default mongoose.models.ProductionPlanning || mongoose.model('ProductionPlanning', ProductionPlanningSchema);
