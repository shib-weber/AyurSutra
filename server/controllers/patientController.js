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

    const patient = await Patient.findById(patientId);
    if (!patient) return res.status(404).json({ message: "Patient not found" });

    res.json(patient);
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
