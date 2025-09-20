const express = require("express");
const { getProfile, updateProfile } = require("../controllers/patientController");
const { protect } = require("../middleware/authMiddleware");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Blog = require("../models/Blog");
const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.get("/stats", async (req, res) => {
  try {
    const patients = 756;
    const doctors = 150;
    const blogs = 20;
    res.json({ patients, doctors, blogs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
