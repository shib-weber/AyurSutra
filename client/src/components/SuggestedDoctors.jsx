import React from "react";
import { useNavigate } from "react-router-dom";
import doctors from '../data/doctor'

const SuggestedDoctors = () => {
  const navigate = useNavigate();


  return (
    <div className="max-h-[800px]">
      <h3 className="text-2xl font-semibold text-black mb-3">Suggested Doctors</h3>
      <div className="space-y-3 h-[95%] overflow-y-auto">
        {doctors.map((d) => (
          <div
            key={d.id}
            className="bg-white border border-emerald-700 p-3 rounded-lg shadow flex items-start space-x-4"
          >
            {/* Avatar */}
            <img
              src={d.image}
              alt={d.name}
              className="h-14 w-14 rounded-full border-2 border-emerald-700"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="font-semibold text-black text-base leading-snug">{d.name}</p>
              <p className="text-gray-700 text-sm leading-snug">{d.specialty}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => navigate(`/appointment/book/${d.id}`)}
                className="px-3 py-1 bg-emerald-700 text-white text-sm rounded hover:bg-emerald-800"
              >
                Book Now
              </button>
              <button className="px-3 py-1 border border-emerald-700 text-emerald-700 text-sm rounded hover:bg-emerald-50">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedDoctors;
