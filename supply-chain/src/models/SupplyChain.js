import mongoose from 'mongoose';

const SupplyChainSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.SupplyChain || mongoose.model('SupplyChain', SupplyChainSchema);
