const express = require("express");
const { bookAppointment, getAppointments, cancelAppointment } = require("../controllers/appointmentController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/book", protect, bookAppointment);
router.get("/", protect, getAppointments);
router.put("/cancel/:id", protect, cancelAppointment);

module.exports = router;
