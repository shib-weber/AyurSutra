const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: { type: Number, required: true },
  patient: { type: mongoose.Schema.Types.ObjectId,  required: true },
  date: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["pending", "confirmed", "cancelled", "completed"], 
    default: "pending" 
  },
  notes: { type: String }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
