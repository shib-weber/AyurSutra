const Doctor = require("../models/Doctor");

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

const getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  res.json(doctor);
};

module.exports = { getDoctors, getDoctorById };
