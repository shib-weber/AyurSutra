const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Notification = require('../models/Notification');

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, slotDay, slot, notes } = req.body;

    const appointment = await Appointment.create({
      patient: req.patient._id,   // patient from auth middleware
      doctor: doctorId,
      notes,
      slotDay,
      slot,
      paymentStatus: "paid",
      status: "confirmed"
    });

    await Patient.findByIdAndUpdate(req.patient._id, {
      $push: { appointments: appointment._id },
    });

    const messages = [
      { message: `Your appointment with Dr. ${notes} is confirmed for ${new Date(slotDay).toLocaleString()} at ${slot}`, category: "General" },
      { message: `Please follow pre-appointment suggestions for your session : Come on an empty stomach or light meal 2 hrs before Panchakarma session.`, category: "Pre-Appointment Suggestions" },
      { message: `Post-appointment suggestions for your session : Avoid spicy, oily, and heavy foods 24 hrs prior to therapy. Drink warm water.`, category: "Post-Appointment Suggestions" },
    ];

    const notificationIds = [];
    for (let msg of messages) {
      const notif = await Notification.create(msg);
      notificationIds.push(notif._id);
    }

    await Patient.findByIdAndUpdate(req.patient._id, {
      $push: { notifications: { $each: notificationIds } },
    });

    res.status(201).json({ appointment, message: "Appointment booked and notifications created" });

  } catch (error) {
    console.error("Book appointment error:", error);
    res.status(500).json({ message: error.message });
  }
};

const UpdateAppointment = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({
      message: "Appointment status updated successfully",
      appointment: updatedAppointment,
    });
  } catch (err) {
    console.error("Error updating appointment:", err);
    res.status(500).json({ message: "Server error", error: err.message });
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

module.exports = { bookAppointment, getAppointments, cancelAppointment, UpdateAppointment };
