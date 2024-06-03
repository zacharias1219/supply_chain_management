import mongoose from 'mongoose';

const RiskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  impact: {
    type: Number,
    required: true,
  },
  likelihood: {
    type: Number,
    required: true,
  },
  mitigationPlan: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Risk || mongoose.model('Risk', RiskSchema);
