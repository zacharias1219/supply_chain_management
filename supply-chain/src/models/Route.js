// src/models/Route.js
import mongoose from 'mongoose';

const RouteSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Route || mongoose.model('Route', RouteSchema);
