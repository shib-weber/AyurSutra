const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  slot: String,
  status: { type: String, enum: ["scheduled", "cancelled", "completed"], default: "scheduled" },
  paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
