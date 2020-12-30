const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");
const fs = require("fs");
const path = require("path");
const Identicon = require("identicon.js");
const md5 = require("md5");
const SETTINGS = require("../../settings");

const MessageSchema = new mongoose.Schema({
  conversation_id: {
    type: String,
  },
  sender_id: {
    type: String,
  },
  receiver_id: {
    type: Array,
  },
  message: {
    type: String,
  },
  messageType:{
    type: String,
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
MessageSchema.plugin(MBUV);
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
module.exports.MessageSchema = MessageSchema;
