const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const IncidentSchema = new mongoose.Schema({
  incidentType: {
    type: String,
  },
  desc: {
    type: String,
  },
  status: {
    type: String,
  },
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },

  members: {
    type: Array,
  },
  createdAt: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
  updatedAt: {
    type: Date,
  },
  updatedBy: {
    type: String,
  },
});
IncidentSchema.plugin(MBUV);
const Incident = mongoose.model("Incident", IncidentSchema);
module.exports = Incident;
module.exports.IncidentSchema = IncidentSchema;
