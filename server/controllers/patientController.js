const Patient = require("../models/Patient");

const getProfile = async (req, res) => {
  res.json(req.patient);
};

const updateProfile = async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.patient._id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile, updateProfile };
