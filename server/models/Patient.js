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

  // extra profile fields
  abhaId: { type: String },
  aadhaar: { type: String },
  dob: { type: Date },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  emergencyName: { type: String },
  emergencyNumber: { type: String },
avatar: {
  type: String,
  default: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF7dLNs-raFokFzem6ycOrwmbwisIcs4RGVCR9RFsKRGtUZdy61od3CP3UiEFrwxO7bP7rolIZeTj9S4wQKS-LxA8DnzFfNvay2r80eY5WyhowcmBySqc_Nx_rmNzOEvC7vNvYer4l1CGQoB67dQZPYo0HhV79yA6vVQ8kWGBB2m3mVfFPYg2y2olLxoeTP0Xvj1rk81eujB19m5B6M-Sd0Utf7svmRtLaUVqeXwyj-xIM7t3FaB2si1OtV_gq8qVdq93fKx0VYmk",
},
complete:{
  type:Boolean,
  default:false
},

  // relationships
  notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }],
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  feedbacks:[{type:mongoose.Schema.Types.ObjectId, ref: "Feedback"}],

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);
