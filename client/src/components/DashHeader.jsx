    import React from "react";

    const DashHeader = () => {
    return (
        <header className="flex flex-shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-[var(--c-border)] bg-[var(--c-bg-primary)] px-8 py-4">
        <div className="flex w-full max-w-md items-center">
            <label className="flex w-full flex-col">
<div className="hidden md:flex items-center w-[100%] mx-6 relative">
  {/* Magnifying Glass Icon */}
  <span className="absolute left-4 text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
      />
    </svg>
  </span>

  {/* Input */}
  <input
    type="text"
    placeholder="Search for therapy, doctor..."
    className="pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-700 w-full"
  />
</div>
            </label>
        </div>
        <div className="flex items-center gap-3">
        <div className="flex items-center gap-4">
            <button className="btn-outline outline-1 outline-emerald-900 rounded-full px-5 h-10 hover:scale-105 hover:bg-emerald-900 hover:text-amber-50 transform transition" >Login</button>
            <button className="btn-filled bg-emerald-900 text-amber-50 rounded-full px-5 h-10 hover:scale-105 hover:bg-amber-50 hover:outline-1 outline-emerald-900 hover:text-emerald-900 transform transition">Register</button>
        </div>
        </div>
        </header>
    );
    };

    export default DashHeader;
