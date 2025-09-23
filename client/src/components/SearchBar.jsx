import React, { useState } from "react";
import doctors from "../data/doctor";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter doctors by name or specialty
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Search Input */}
      <div className="relative flex items-center bg-gray-100 border-2 border-emerald-700 p-3 rounded-lg">
        {/* Search Icon */}
        <span className="absolute left-4 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#007f80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </span>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search therapies or doctors..."
          className="flex-1 pl-10 bg-transparent outline-none text-emerald-700 placeholder-gray-500"
        />
      </div>

      {/* Results Dropdown */}
      {query && (
        <div className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-y-auto">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-3 border-b hover:bg-emerald-50"
              >
                {/* Doctor Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-emerald-800">{doc.name}</p>
                    <p className="text-sm text-gray-600">{doc.specialty}</p>
                  </div>
                </div>

                {/* Book Button on Right */}
                <button
                  onClick={() => navigate(`/appointment/book/${doc.id}`)}
                  className="ml-4 bg-green-500 px-3 py-1 rounded hover:bg-green-800 hover:text-white"
                >
                  Book
                </button>
              </div>
            ))
          ) : (
            <p className="p-3 text-gray-500 text-sm">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
