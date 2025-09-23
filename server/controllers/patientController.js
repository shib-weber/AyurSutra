const Patient = require("../models/Patient");
const jwt = require("jsonwebtoken");

const getProfile = async (req, res) => {
  try {
    // If you have the token decoded in middleware, use req.userId
    // Otherwise, decode here
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patientId = decoded.id; // make sure you stored id in JWT

    const patient = await Patient.findById(patientId).populate({
        path: "appointments",
        match: { status: { $in: ["pending", "confirmed"] } }, // only upcoming
        populate: {
          path: "doctor",
          select: "name specialty avatar",
        },
      });
    if (!patient) return res.status(404).json({ message: "Patient not found" });

        const upcomingAppointments = patient.appointments.map((appt) => ({
      day: appt.createdAt.toLocaleDateString(), // You might replace with actual appt.date field later
      time: appt.slot,
      therapy: appt.notes || "General Therapy",
      status:appt.status,
      paymentStatus:appt.paymentStatus,
      doctor: appt.doctor,
      image: appt.doctor?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqWf3H5wTZJUI2MuflwPLMpVvd81F8bZR0yrd5R-KdOuAveRz1eRtH7mKWJ9XosC0Fcz7vzBLQZHaRK2yh9j4czhvWq9ji_-JMk_SBjLdyu2hAkw3yBK9UtdJn25mfrfYFB5rIC_5pgNZux0fLHoUvjKoN6HResuiy1ZXVxLIbO5tW-_Z_NvWDbq_SfkuPQreJpkkB4usiZSuEav9Oc1O2r_23ApH90tH7yGQi_l13Z8-6ZW9FQyI4iC3D9JqBZgbJ0ca0ytl2XE",
    }));

     res.json({
      ...patient.toObject(),
      upcomingAppointments,
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
