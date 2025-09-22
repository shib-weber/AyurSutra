const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient")

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, slot } = req.body;

    const appointment = await Appointment.create({
      patient: req.patient._id,   // patient comes from auth middleware
      doctor: doctorId,
      slot,
      paymentStatus: "paid"
    });

    await Patient.findByIdAndUpdate(req.patient._id, {
      $push: { appointments: appointment._id },
    }).then(console.log("here"));

    res.status(201).json(appointment);  // return appointment
  } catch (error) {
    console.error("Book appointment error:", error);  // 👈 log it
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
