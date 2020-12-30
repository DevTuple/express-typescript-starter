const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const DynamicSchemaSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  JSONSchema: {
    type: Object,
  },
  UISchema: {
    type: Object,
  },
});
DynamicSchemaSchema.plugin(MBUV);
const DynamicSchema = mongoose.model("DynamicSchema", DynamicSchemaSchema);
module.exports = DynamicSchema;
module.exports.DynamicSchemaSchema = DynamicSchemaSchema;
