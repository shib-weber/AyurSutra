import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import api from '../../api/axiosInstance'
const doctors = [
  {
    id: 1,
    name: "Dr. Anjali Verma",
    specialty: "Ayurvedic Medicine",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    venues: [
      { id: 1, name: "Ayurveda Wellness Clinic, Delhi", timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
      { id: 2, name: "Green Leaf Ayurveda Center, Noida", timeSlots: ["9:30 AM", "1:00 PM", "3:30 PM"] },
    ],
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    specialty: "Panchakarma Specialist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    venues: [
      { id: 1, name: "Panchakarma Healing Hub, Mumbai", timeSlots: ["9:00 AM", "12:00 PM", "5:00 PM"] },
    ],
  },
  {
    id: 3,
    name: "Dr. Meera Sharma",
    specialty: "Yoga Therapist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    venues: [
      { id: 1, name: "Yoga Wellness Center, Bangalore", timeSlots: ["8:00 AM", "10:30 AM", "5:00 PM"] },
    ],
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    specialty: "Naturopathy",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    venues: [
      { id: 1, name: "Nature Care Clinic, Pune", timeSlots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
    ],
  },
  {
    id: 5,
    name: "Dr. Ritu Kapoor",
    specialty: "Herbal Medicine",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    venues: [
      { id: 1, name: "Herbal Life Clinic, Jaipur", timeSlots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    ],
  },
  {
    id: 6,
    name: "Dr. Anil Joshi",
    specialty: "Ayurvedic Massage",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    venues: [
      { id: 1, name: "Ayur Massage Center, Kolkata", timeSlots: ["9:30 AM", "11:30 AM", "2:00 PM"] },
    ],
  },
  {
    id: 7,
    name: "Dr. Sanya Reddy",
    specialty: "Panchakarma Therapy",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    venues: [
      { id: 1, name: "Healing Touch Clinic, Hyderabad", timeSlots: ["8:30 AM", "12:00 PM", "4:00 PM"] },
    ],
  },
  {
    id: 8,
    name: "Dr. Rajat Malhotra",
    specialty: "Ayurvedic Surgery",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    venues: [
      { id: 1, name: "Ayur Surgery Center, Chennai", timeSlots: ["10:00 AM", "1:00 PM", "3:30 PM"] },
    ],
  },
  {
    id: 9,
    name: "Dr. Priya Nair",
    specialty: "Holistic Medicine",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    venues: [
      { id: 1, name: "Holistic Health Clinic, Kochi", timeSlots: ["9:00 AM", "11:30 AM", "2:30 PM"] },
    ],
  },
  {
    id: 10,
    name: "Dr. Karan Mehta",
    specialty: "Herbalist",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    venues: [
      { id: 1, name: "Herbal Care Hub, Ahmedabad", timeSlots: ["10:00 AM", "12:30 PM", "4:00 PM"] },
    ],
  },
  {
    id: 11,
    name: "Dr. Sneha Gupta",
    specialty: "Ayurvedic Nutrition",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    venues: [
      { id: 1, name: "Nutrition Wellness Center, Delhi", timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"] },
    ],
  },
  {
    id: 12,
    name: "Dr. Deepak Verma",
    specialty: "Detox Therapy",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    venues: [
      { id: 1, name: "Detox Clinic, Mumbai", timeSlots: ["8:30 AM", "10:30 AM", "3:00 PM"] },
    ],
  },
  {
    id: 13,
    name: "Dr. Ananya Joshi",
    specialty: "Ayurvedic Dermatology",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    venues: [
      { id: 1, name: "Skin & Ayurveda, Pune", timeSlots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    ],
  },
  {
    id: 14,
    name: "Dr. Rohit Sharma",
    specialty: "Panchakarma Specialist",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    venues: [
      { id: 1, name: "Panchakarma Healing Hub, Jaipur", timeSlots: ["9:30 AM", "12:30 PM", "3:30 PM"] },
    ],
  },
  {
    id: 15,
    name: "Dr. Kavita Singh",
    specialty: "Ayurvedic Physiotherapy",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    venues: [
      { id: 1, name: "Physio Ayurveda Center, Bangalore", timeSlots: ["8:30 AM", "11:00 AM", "2:30 PM"] },
    ],
  },
];


export default function DoctorBooking() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === parseInt(doctorId));

  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [serialNumber, setSerialNumber] = useState(null);
  const [step, setStep] = useState(1);

  if (!doctor) return <p className="p-6 text-red-500">Doctor not found.</p>;

  const handleVenueSelect = (venue) => {
    setSelectedVenue(venue);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSerialNumber(Math.floor(Math.random() * 50) + 1);
    setStep(3);
  };

const handlePayment = async () => {
  try {
    //const patientData = JSON.parse(localStorage.getItem("patient"));
    const token = localStorage.getItem("token"); // must be stored after login
    const notes=doctor.specialty
    const payload = {
      doctorId:2,  
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


  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="md:w-64 w-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full border-2 border-emerald-700" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-emerald-700">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>

          {/* Booking Steps */}
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

          {step === 2 && (
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

          {step === 3 && (
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold">
                Your Slot: <span className="text-emerald-700">{selectedTime}</span>
              </h3>
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
