import mongoose from 'mongoose';

const VendorManagementSchema = new mongoose.Schema({
  vendor: {
    type: String,
    required: true,
  },
  performance: {
    type: Number,
    required: true,
  },
  contract: {
    type: String,
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

export default mongoose.models.VendorManagement || mongoose.model('VendorManagement', VendorManagementSchema);
