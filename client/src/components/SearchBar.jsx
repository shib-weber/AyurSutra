import React from "react";

const SearchBar = () => {
  return (
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

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search therapies or doctors..."
        className="flex-1 pl-10 bg-transparent outline-none text-emerald-700 placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
