const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const LoggedInUserSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  role: {
    type: String,
  },
  center: {
    type: String,
  },
  websocketId: {
    type: String,
  },
  mobilesocketId: {
    type: String,
  },

  status: {
    type: Boolean,
    default: true,
  },
});
LoggedInUserSchema.plugin(MBUV);
const LoggedInUser = mongoose.model("LoggedInUser", LoggedInUserSchema);
module.exports = LoggedInUser;
module.exports.LoggedInUserSchema = LoggedInUserSchema;
