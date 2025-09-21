const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  role: { type: String, enum: ["patient", "doctor", "admin"], default: "patient" },

  // login details
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // profile details
  name: { type: String },
  age: { type: Number },
  phone: { type: String },
  state: { type: String },
  city: { type: String },
  address: { type: String },

  // relationships
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Patient", patientSchema);
