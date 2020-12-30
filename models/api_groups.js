const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const ApiGroupSchema = new mongoose.Schema({
    name: {
    type: String
  },
  description : {
    type: String
  },
  api:{
    type: Array
 
  }
});
ApiGroupSchema.plugin(MBUV);
const ApiGroup = mongoose.model(
  "ApiGroup",
  ApiGroupSchema
);
module.exports = ApiGroup;
module.exports.ApiGroupSchema = ApiGroupSchema;
