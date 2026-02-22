/* ActiveFleet Model
   Shared schema definition for real-time bus locations
   Used by the main server
*/

const mongoose = require("mongoose");

const fleetSchema = new mongoose.Schema(
  {
    bus_id: { type: String, unique: true, index: true },
    route_id: { type: String, default: null },
    location: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true }
    },
    current_speed: { type: Number, default: null },
    passenger_count: { type: Number, default: 0 },
    monitored: { type: Boolean, default: false },
    current_stop_id: { type: String, default: null },
    last_updated: { type: Date, default: Date.now }
  },
  { collection: "ActiveFleet" }
);

fleetSchema.index({ location: "2dsphere" });

const ActiveFleet = mongoose.model("ActiveFleet", fleetSchema);

module.exports = ActiveFleet;
