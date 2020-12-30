const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const RelationshipSchema = new mongoose.Schema({
entity: {
    type: String,
  },
  entityID: {
    type: String,
  },
  entityField: {
    type: String,
  },
  relations: {
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
  }
});
RelationshipSchema.plugin(MBUV);
const Relationship = mongoose.model("Relationship", RelationshipSchema);
module.exports = Relationship;
module.exports.RelationshipSchema = RelationshipSchema;
