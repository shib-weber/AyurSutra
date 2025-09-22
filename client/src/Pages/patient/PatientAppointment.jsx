// src/pages/PatientAppointment.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import SearchBar from "../../components/SearchBar";
import RecommendedTherapies from "../../components/RecommendedTherapies";
import TherapyHistory from "../../components/TherapyHistory";
import SuggestedDoctors from "../../components/SuggestedDoctors";
import DoctorProfile from "../../components/DoctorProfile";

export default function PatientAppointment() {
  return (
    <div className="flex min-h-screen text-black  font-display">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        

        <main className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-bold text-black ">
                Book an Appointment
            </h2>

            <SearchBar />

            <RecommendedTherapies />

            <TherapyHistory />

            
          </div>

          {/* Right Column - Doctor Profile */}
          <SuggestedDoctors />
          
        </main>
      </div>
    </div>
  );
}
