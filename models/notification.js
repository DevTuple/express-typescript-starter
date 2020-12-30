const mongoose = require("mongoose");
const MBUV = require("mongoose-beautiful-unique-validation");

const notificationSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    socket_id: {
        type: String
    }
});

notificationSchema.plugin(MBUV);
const notification = mongoose.model("notification", notificationSchema);
module.exports = notification;
module.exports.notificationSchema = notificationSchema;