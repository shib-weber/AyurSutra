import React, { useState } from "react";

const TherapySchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  // Month & year
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // First day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Number of days in this month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Handlers
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null); // reset when month changes
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null); // reset when month changes
  };

  // Create calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Today check
  const today = new Date();
  const isThisMonth =
    today.getMonth() === month && today.getFullYear() === year;

  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-[var(--foreground)]">
          Schedule Therapy 
        </h3>
        <div className="flex items-center gap-2">
          {/* Left Arrow */}
          <button
            onClick={handlePrevMonth}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[var(--muted)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <span className="text-lg font-medium text-[var(--foreground)]">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>

          {/* Right Arrow */}
          <button
            onClick={handleNextMonth}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[var(--muted)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 text-center">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div
            key={i}
            className="font-bold text-[var(--muted-foreground)] text-sm py-2"
          >
            {d}
          </div>
        ))}

        {days.map((day, i) =>
          day ? (
            <div key={i} className="py-2">
              <button
                onClick={() => setSelectedDay(day)}
                className={`flex items-center justify-center h-8 w-8 mx-auto rounded-full transition-colors
                  ${
                    isThisMonth && day === today.getDate()
                      ? "bg-green-700 text-white font-bold" // current day
                      : selectedDay === day
                      ? "bg-yellow-400 text-black font-bold" // selected day
                      : "text-[var(--foreground)] hover:bg-green-200" // normal + hover
                  }`}
              >
                {day}
              </button>
            </div>
          ) : (
            <div key={i} className="py-2"></div>
          )
        )}
      </div>
    </div>
  );
};

export default TherapySchedule;
