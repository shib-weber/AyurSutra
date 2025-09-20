import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientHeader from "../../components/PatientHeader";
import Sidebar from "../../components/Sidebar";

const doctorsList = [
  { id: 1, name: "Dr. Anjali Mehta", specialty: "Physiotherapy" },
  { id: 2, name: "Dr. Rajesh Sharma", specialty: "Ayurveda" },
  { id: 3, name: "Dr. Priya Singh", specialty: "Nutrition" },
];

const AppointmentBooking = ({ patientData }) => {
  const navigate = useNavigate();

  const [appointmentDate, setAppointmentDate] = useState("");
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (appointmentDate) {
      setAvailableDoctors(doctorsList);
      setSelectedDoctor("");
    }
  }, [appointmentDate]);

  const handleConfirm = () => {
    const bookingData = {
      date: appointmentDate,
      doctor: selectedDoctor,
      payment: paymentMethod,
      notes: notes,
      patient: patientData,
    };
    console.log("Appointment Booking Data:", bookingData);
    navigate("/appointment-success", { state: bookingData });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <PatientHeader />

        {/* Form */}
        <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border border-emerald-100">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center">
            Book an Appointment
          </h2>

          {/* Progress Indicator */}
          <div className="flex justify-between mb-8">
            {["Date", "Doctor", "Payment", "Notes"].map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-200 text-emerald-800 font-semibold flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">{step}</p>
              </div>
            ))}
          </div>

          {/* Step 1: Choose Date */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-700">
              Select Appointment Date
            </label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Step 2: Choose Doctor */}
          {appointmentDate && (
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">
                Choose Doctor
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select Doctor</option>
                {availableDoctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} - {doc.specialty}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Step 3: Payment */}
          {selectedDoctor && (
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select Payment</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
          )}

          {/* Step 4: Additional Notes */}
          {selectedDoctor && (
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-700">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Symptoms, preferences, or special instructions..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          )}

          {/* Confirm Button */}
          {selectedDoctor && paymentMethod && (
            <div className="text-center">
              <button
                onClick={handleConfirm}
                className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition shadow-lg"
              >
                Confirm Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
