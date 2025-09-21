const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, password, repassword } = req.body;


    const exists = await Patient.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "Patient already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const patient = await Patient.create({ email, password: hashedPassword });

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const patientData = patient.toObject();
    delete patientData.password; // optional, hide password

    res.status(201).json({ token, patient: patientData });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, patient.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.json({ token, patient });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
