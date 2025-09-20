const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  age: { type: Number },
  phone: { type: String },
  profileCompleted: { type: Boolean, default: false },
  upcomingAppointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }]
});

module.exports = mongoose.model("Patient", patientSchema);
