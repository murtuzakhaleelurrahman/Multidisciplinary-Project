/* Routes Model
   Structured route definitions with segments
   Used for full-route ETA prediction and route planning
*/

const mongoose = require("mongoose");

const routesSchema = new mongoose.Schema(
  {
    route_id: { type: String, unique: true, required: true, index: true },
    route_name: { type: String, required: true },
    segments: [
      {
        from: { type: String, required: true },
        to: { type: String, required: true },
        distance_m: { type: Number, required: true }
      }
    ],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  },
  { collection: "Routes" }
);

const Routes = mongoose.model("Routes", routesSchema);

module.exports = Routes;
