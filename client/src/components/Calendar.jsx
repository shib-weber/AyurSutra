import React, { useState } from "react";

const Calendar = ({ appointments }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const daysInMonth = [];
  for (let i = 1; i <= endOfMonth.getDate(); i++) daysInMonth.push(i);

  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
            &lt;
          </button>
          <button onClick={nextMonth} className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20">
            &gt;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 text-center text-sm gap-1">
        {["S","M","T","W","T","F","S"].map((d, idx) => (
          <div key={`day-${idx}`} className="font-bold text-gray-500 dark:text-gray-400 py-2">{d}</div>
        ))}
        {daysInMonth.map((d) => {
          const apptToday = appointments?.find(a => new Date(a.date).getDate() === d && new Date(a.date).getMonth() === currentDate.getMonth());
          return (
            <div key={`date-${d}`} className="py-2 relative">
              {apptToday ? (
                <span className="absolute inset-0 flex items-center justify-center w-8 h-8 mx-auto my-auto rounded-full bg-primary text-white">{d}</span>
              ) : d}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
