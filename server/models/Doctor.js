const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  bio: String,
  availableSlots: [String] // Example: ["2025-09-22T10:00", "2025-09-22T11:00"]
});

module.exports = mongoose.model("Doctor", doctorSchema);
