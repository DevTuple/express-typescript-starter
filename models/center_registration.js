const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const CenterRegistrationSchema = new mongoose.Schema({
  center_name: {
    type: String
  },
  center_location: {
    type: String
  }
});
CenterRegistrationSchema.plugin(MBUV);
const CenterRegistration = mongoose.model(
  "CenterRegistration",
  CenterRegistrationSchema
);
module.exports = CenterRegistration;
module.exports.CenterRegistrationSchema = CenterRegistrationSchema;
