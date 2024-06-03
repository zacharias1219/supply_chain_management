import mongoose from 'mongoose';

const RouteSchema = new mongoose.Schema({
  startingPoint: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  waypoints: {
    type: [String],
  },
  distance: {
    type: Number,
    required: true,
  },
  estimatedTime: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Route || mongoose.model('Route', RouteSchema);
