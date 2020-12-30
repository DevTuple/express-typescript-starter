const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const AppWorkspaceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
AppWorkspaceSchema.plugin(MBUV);
const AppWorkspace = mongoose.model("AppWorkspace", AppWorkspaceSchema);
module.exports = AppWorkspace;
module.exports.AppWorkspaceSchema = AppWorkspaceSchema;
