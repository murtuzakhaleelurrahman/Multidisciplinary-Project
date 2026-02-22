/* TripHistory Model
   Shared schema definition for historical traffic data
   Used by both the main server and seeder script
*/

const mongoose = require("mongoose");

const tripHistorySchema = new mongoose.Schema(
  {
    bus_id: { type: String, index: true },
    route_id: { type: String, default: null },
    timestamp: { type: Date, default: Date.now, index: true },
    day_of_week: { type: String },
    hour_of_day: { type: Number },
    segment: { type: String, default: null },
    speed: { type: Number, default: null },
    traffic_level: { type: String, default: "unknown" },
    coordinates: { type: [Number], default: undefined }
  },
  { collection: "TripHistory" }
);

const TripHistory = mongoose.model("TripHistory", tripHistorySchema);

module.exports = TripHistory;
