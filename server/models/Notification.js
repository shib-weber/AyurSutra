const mongoose =require("mongoose");

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  link: { type: String }, // e.g., /appointment-success or /profile
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports= Notification;
