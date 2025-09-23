const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: { type: Number, required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  slot: { type: String, required: true },  
  paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" }, 
  status: { type: String, enum: ["pending", "confirmed", "cancelled", "completed"], default: "confirmed" },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model("Appointment", appointmentSchema);
