import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import api from '../../api/axiosInstance'
import doctors from '../../data/doctor'

export default function DoctorBooking() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === parseInt(doctorId));

  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [serialNumber, setSerialNumber] = useState(null);
  const [step, setStep] = useState(1);

  if (!doctor) return <p className="p-6 text-red-500">Doctor not found.</p>;

  // Generate 3 upcoming dates with weekday names
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleVenueSelect = (venue) => {
    setSelectedVenue(venue);
    setStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(3);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSerialNumber(Math.floor(Math.random() * 50) + 1);
    setStep(4);
  };

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token"); // must be stored after login
      const notes = doctor.specialty;
      const payload = {
        doctorId: doctor.id,
        slotDay: selectedDate,
        slot: selectedTime,
        notes
      };

      await api.post("/api/appointment/book", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });

      navigate("/appointment-success");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  const upcomingDates = getUpcomingDates();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <div className="md:w-64 w-full">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full border-2 border-emerald-700" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-emerald-700">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>

          {/* Step 1: Choose Venue */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose Venue</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctor.venues.map((venue) => (
                  <div
                    key={venue.id}
                    onClick={() => handleVenueSelect(venue)}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg cursor-pointer hover:bg-emerald-100 transition"
                  >
                    <h4 className="font-semibold">{venue.name}</h4>
                    <p className="text-gray-500">{venue.timeSlots.length} slots available</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Choose Date */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose Date</h3>
              <div className="grid grid-cols-3 gap-4">
                {upcomingDates.map((date, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDateSelect(date)}
                    className="p-4 bg-white border border-emerald-700 rounded-lg hover:bg-emerald-50 transition"
                  >
                    <p className="font-semibold">{date.toLocaleDateString("default", { weekday: "short" })}</p>
                    <p>{date.toLocaleDateString()}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Choose Time Slot */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Choose Time Slot</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {selectedVenue.timeSlots.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTimeSelect(time)}
                    className="p-3 bg-white border border-emerald-700 rounded-lg hover:bg-emerald-50 transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Confirm & Pay */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold">
                Your Slot: <span className="text-emerald-700">{selectedTime}</span>
              </h3>
              <p className="text-gray-700">
                Date: <span className="font-bold">{selectedDate.toLocaleDateString()}</span>
              </p>
              <p className="text-gray-700">
                Serial Number: <span className="font-bold">{serialNumber}</span>
              </p>
              <button
                onClick={handlePayment}
                className="px-8 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
              >
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
