const express = require("express");
const { bookAppointment, getAppointments, cancelAppointment, UpdateAppointment } = require("../controllers/appointmentController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/book", protect, bookAppointment);
router.put('/update_appointment',protect, UpdateAppointment);
router.get("/", protect, getAppointments);
router.put("/cancel/:id", protect, cancelAppointment);

module.exports = router;
