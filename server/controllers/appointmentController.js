const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, slot } = req.body;
    const appointment = await Appointment.create({
      patient: req.patient._id,
      doctor: doctorId,
      slot,
      paymentStatus: "paid"
    });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({ patient: req.patient._id }).populate("doctor");
  res.json(appointments);
};

const cancelAppointment = async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, { status: "cancelled" });
  res.json({ message: "Appointment cancelled" });
};

module.exports = { bookAppointment, getAppointments, cancelAppointment };
