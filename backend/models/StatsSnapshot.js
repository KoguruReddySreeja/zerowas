import mongoose from 'mongoose';

const statsSnapshotSchema = new mongoose.Schema({
  totalFoodSavedKg: { type: Number, required: true },
  peopleServed: { type: Number, required: true },
  co2PreventedKg: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('StatsSnapshot', statsSnapshotSchema);
