const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const UserProfileSchema = new mongoose.Schema({
  user_id: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  address: {
    type: String,
  },
  status: {
    type: String,
  },
  department: {
    type: String,
  },

  designation: {
    type: String,
  },

  phone: {
    type: String,
    maxlength: 10,
    minlength: 10,
  },
});

UserProfileSchema.plugin(MBUV);
const UserProfile = mongoose.model("UserProfile", UserProfileSchema);
module.exports = UserProfile;
module.exports.UserProfileSchema = UserProfileSchema;
