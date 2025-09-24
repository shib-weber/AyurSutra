const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  mood: { type: String, enum: ["😀", "🙂", "😐", "☹️", "😢"],  },
  digestion: { type: String, enum: ["Good", "Average", "Poor"], },
  appetite: { type: String, enum: ["Strong", "Normal", "Low"] },
  bowel: { type: String, enum: ["Regular", "Irregular", "Constipation", "Loose"] },
  health: { type: String, enum: ["Excellent", "Good", "Fair", "Poor"], },
  pain: { type: String, enum: ["None", "Mild", "Moderate", "Severe"],  },
  sleep: { type: String, enum: ["Restful", "Disturbed", "Insufficient"] },
  energy: { type: String, enum: ["High", "Moderate", "Low"] },
  hydration: { type: String, enum: ["Adequate", "Low", "Excessive"] },
  stress: { type: String, enum: ["None", "Mild", "Moderate", "Severe"] },
  activity: { type: String, enum: ["Active", "Moderate", "Sedentary"] },
  menstrual: { type: String }, // optional
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);