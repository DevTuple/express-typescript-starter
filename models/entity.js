const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const EntitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  versions: {
    type: Array,
  },
});
EntitySchema.plugin(MBUV);
const Entity = mongoose.model("Entity", EntitySchema);
module.exports = Entity;
module.exports.EntitySchema = EntitySchema;
