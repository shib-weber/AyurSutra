const Feedback = require("../models/Feedback");
const Patient = require("../models/Patient");

// Create new feedback and link it to patient
exports.createFeedback = async (req, res) => {
  try {
    const { patientId, ...feedbackData } = req.body;

    if (!patientId) {
      return res.status(400).json({ message: "Patient ID is required" });
    }

    // Create feedback
    const feedback = new Feedback({ ...feedbackData, });
    await feedback.save();

    // Push feedback into patient’s feedback array
    await Patient.findByIdAndUpdate(patientId, {
      $push: { feedbacks: feedback._id },
    });

    res.status(201).json({
      message: "Feedback submitted and linked to patient successfully",
      feedback,
    });
  } catch (err) {
    console.error("Error creating feedback:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};