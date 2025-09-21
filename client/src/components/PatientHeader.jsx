// PatientHeader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PatientHeader = ({ title, isProfileComplete }) => {
  const navigate = useNavigate();

  return (
<header className="flex flex-col ml-3 sm:ml-5 max-w-[92%] bg-white shadow-lg shadow-[#008080d0] p-4 -mt-2 rounded-lg">
      {/* Top Row */}
      <div className="flex flex-col gap-3  sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>

        <button
          onClick={() => navigate("/appointment")}
          disabled={!isProfileComplete}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
            isProfileComplete
              ? "bg-[#007f80] text-white hover:bg-[#006666]"
              : "bg-gray-400 text-gray-100 cursor-not-allowed"
          }`}
        >
          Book Appointment
        </button>
      </div>

      {/* Red warning below Welcome if profile incomplete */}
      {!isProfileComplete && (
        <p
          onClick={() => navigate("/patient_profile")}
          className="mt-2 text-sm text-red-600 cursor-pointer hover:underline"
        >
          ⚠ Please complete your profile before booking an appointment
        </p>
      )}
    </header>
  );
};

export default PatientHeader;
