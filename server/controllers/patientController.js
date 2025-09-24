const Patient = require("../models/Patient");
const jwt = require("jsonwebtoken");
const Notification = require("../models/Notification");
const feedbackMappings = {
  mood: { "😀": 5, "🙂": 4, "😐": 3, "☹️": 2, "😢": 1 },
  digestion: { Good: 3, Average: 2, Poor: 1 },
  appetite: { Strong: 3, Normal: 2, Low: 1 },
  bowel: { Regular: 3, Irregular: 2, Constipation: 1, Loose: 1 },
  health: { Excellent: 4, Good: 3, Fair: 2, Poor: 1 },
  pain: { None: 4, Mild: 3, Moderate: 2, Severe: 1 },
  sleep: { Restful: 3, Disturbed: 2, Insufficient: 1 },
  energy: { High: 3, Moderate: 2, Low: 1 },
  hydration: { Adequate: 3, Low: 2, Excessive: 1 },
  stress: { None: 4, Mild: 3, Moderate: 2, Severe: 1 },
  activity: { Active: 3, Moderate: 2, Sedentary: 1 },
};

const processFeedbacksForChart = (feedbacks) => {
  // Step 1: Map feedbacks to numeric values and group by day
  const grouped = {};

  feedbacks.forEach((f) => {
    const date = new Date(f.createdAt).toLocaleDateString();

    if (!grouped[date]) {
      grouped[date] = [];
    }

    grouped[date].push({
      mood: feedbackMappings.mood[f.mood] || null,
      digestion: feedbackMappings.digestion[f.digestion] || null,
      appetite: feedbackMappings.appetite[f.appetite] || null,
      bowel: feedbackMappings.bowel[f.bowel] || null,
      health: feedbackMappings.health[f.health] || null,
      pain: feedbackMappings.pain[f.pain] || null,
      sleep: feedbackMappings.sleep[f.sleep] || null,
      energy: feedbackMappings.energy[f.energy] || null,
      hydration: feedbackMappings.hydration[f.hydration] || null,
      stress: feedbackMappings.stress[f.stress] || null,
      activity: feedbackMappings.activity[f.activity] || null,
    });
  });

  // Step 2: Calculate averages per day
  const result = Object.entries(grouped).map(([date, dayFeedbacks]) => {
    const avg = {};

    const keys = Object.keys(dayFeedbacks[0]);

    keys.forEach((key) => {
      const values = dayFeedbacks.map((f) => f[key]).filter((v) => v !== null && v !== undefined);
      avg[key] = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : null;
    });

    return { date, ...avg };
  });

  // Sort by date ascending
  return result.sort((a, b) => new Date(a.date) - new Date(b.date));
};


const getProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patientId = decoded.id;

    const patient = await Patient.findById(patientId)
      .populate({
        path: "appointments",
        match: { status: { $in: ["pending", "confirmed"] } },
        populate: { path: "doctor", select: "name specialty avatar" },
      })
      .populate({
        path: "notifications",
        options: { sort: { createdAt: -1 } }, // latest notifications first
      })
      .populate({
        path:"feedbacks",
        options:{sort: { createdAt: -1 } }
      })

    if (!patient) return res.status(404).json({ message: "Patient not found" });

    const upcomingAppointments = patient.appointments.map((appt) => ({
      id: appt._id,
      day: appt.slotDay,
      time: appt.slot,
      therapy: appt.notes || "General Therapy",
      status: appt.status,
      paymentStatus: appt.paymentStatus,
      doctor: appt.doctor,
      image: appt.doctor?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqWf3H5wTZJUI2MuflwPLMpVvd81F8bZR0yrd5R-KdOuAveRz1eRtH7mKWJ9XosC0Fcz7vzBLQZHaRK2yh9j4czhvWq9ji_-JMk_SBjLdyu2hAkw3yBK9UtdJn25mfrfYFB5rIC_5pgNZux0fLHoUvjKoN6HResuiy1ZXVxLIbO5tW-_Z_NvWDbq_SfkuPQreJpkkB4usiZSuEav9Oc1O2r_23ApH90tH7yGQi_l13Z8-6ZW9FQyI4iC3D9JqBZgbJ0ca0ytl2XE",
    }));

    const notifications = patient.notifications.map((notif) => ({
      id: notif._id,
      title: notif.message,
      category: notif.category,
      time: new Date(notif.createdAt).toLocaleString(),
    }));

    const feedbacksForChart = processFeedbacksForChart(patient.feedbacks);

    res.json({
      ...patient.toObject(),
      upcomingAppointments,
      notifications,
      feedbacks: feedbacksForChart,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get profile" });
  }
};

// Update patient profile
const updateProfile = async (req, res) => {
  try {
    const updatedData = req.body;

    const allowedFields = [
      "name",
      "age",
      "phone",
      "state",
      "city",
      "email",
      "abhaId",
      "aadhaar",
      "address",
      "dob",
      "gender",
      "emergencyName",
      "emergencyNumber",
      "avatar",
      "complete" 
    ];

    const dataToUpdate = {};
    allowedFields.forEach((key) => {
      if (updatedData[key] !== undefined) dataToUpdate[key] = updatedData[key];
    });

    const updatedPatient = await Patient.findByIdAndUpdate(
      req.patient._id,
      dataToUpdate,
      { new: true, runValidators: true }
    );

    res.json(updatedPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile, updateProfile };
