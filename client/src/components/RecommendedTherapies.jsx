import React, { useState } from "react";
import doctors from "../data/doctor";
import { useNavigate } from "react-router-dom";
import therapies from "../data/therapies";

const RecommendedTherapies = () => {
  const navigate = useNavigate();
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  // Filter doctors based on therapy name and doctor's specialty matching
  const getDoctorsForTherapy = (therapyName) => {
    return doctors.filter((doc) =>
      doc.specialty.toLowerCase().includes(therapyName.toLowerCase())
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-black mb-6">
        Recommended Therapies
      </h3>

      {!selectedTherapy ? (
        // ---------- GRID VIEW ----------
        <div className="grid h-[500px] overflow-hidden overflow-y-auto md:grid-cols-2 gap-6">
          {therapies.map((t) => (
            <div
              key={t.id}
              className="bg-white cursor-pointer hover:scale-[1.02] transition-transform duration-200 p-4 rounded-lg shadow shadow-emerald-900"
              onClick={() => setSelectedTherapy(t)}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h4 className="text-lg font-bold mt-3 text-black">{t.name}</h4>
              <p className="text-gray-900 text-sm mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      ) : (
        // ---------- DETAIL VIEW ----------
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <button
            className="mb-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            onClick={() => setSelectedTherapy(null)}
          >
            ← Back
          </button>

          <img
            src={selectedTherapy.image}
            alt={selectedTherapy.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-bold text-black mb-2">
            {selectedTherapy.name}
          </h4>
          <p className="text-gray-800 mb-6">{selectedTherapy.desc}</p>

          <h5 className="text-lg font-semibold text-emerald-800 mb-4">
            Available Doctors
          </h5>
          <div className="grid md:grid-cols-2 gap-4">
            {getDoctorsForTherapy(selectedTherapy.name).length > 0 ? (
              getDoctorsForTherapy(selectedTherapy.name).map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h6 className="font-bold text-gray-900">{doc.name}</h6>
                    <p className="text-sm text-gray-600 mb-2">
                      {doc.specialty}
                    </p>
                    {doc.venues.map((venue) => (
                      <div key={venue.id} className="mb-2">
                        <p className="text-sm font-semibold text-emerald-700">
                          {venue.name}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {venue.timeSlots.map((slot, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded"
                            >
                              {slot}
                            </span>
                          ))}
                          <button onClick={() => navigate(`/appointment/book/${doc.id}`)} className="bg-green-500 p-1 rounded hover:bg-green-800 hover:text-white">Book</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No doctors available for this therapy currently.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendedTherapies;
