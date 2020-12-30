const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  services: {
    type: Array,
  },
  designations: {
    type: Array,
  },
});
DepartmentSchema.plugin(MBUV);
const Department = mongoose.model("Department", DepartmentSchema);
module.exports = Department;
module.exports.DepartmentSchema = DepartmentSchema;
