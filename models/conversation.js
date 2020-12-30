const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");
const fs = require("fs");
const path = require("path");
const Identicon = require("identicon.js");
const md5 = require("md5");
const SETTINGS = require("../../settings");

const ConversationSchema = new mongoose.Schema({
  members: {
    type: Array
  },
  category: {
    type: String
  },
  source_id: {
    type: String
  },
  source_type: {
    type: String
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String
  },
  updatedAt: {
    type: Date
  },
  updatedBy: {
    type: String
  }
});
ConversationSchema.plugin(MBUV);
const Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation;
module.exports.ConversationSchema = ConversationSchema;
