import React, { useState } from "react";

const Calendar = ({ appointments }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  const nextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const daysInMonth = Array.from(
    { length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() },
    (_, i) => i + 1
  );

  const STATUS_COLORS = {
    confirmed: "bg-green-500",
    pending: "bg-yellow-500",
    cancelled: "bg-red-500",
    default: "bg-blue-500",
  };

  const getApptColorClass = (appt) => {
    if (!appt) return "bg-transparent";
    return STATUS_COLORS[appt.status] || STATUS_COLORS.default;
  };

  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-primary/10"
          >
            &lt;
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-sm gap-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, idx) => (
          <div key={`day-${idx}`} className="font-bold text-gray-900 py-2">
            {d}
          </div>
        ))}

        {daysInMonth.map((d) => {
          const apptToday = appointments?.find((a) => {
            const apptDate = new Date(a.day); // parse day from backend
            return (
              apptDate.getDate() === d &&
              apptDate.getMonth() === currentDate.getMonth() &&
              apptDate.getFullYear() === currentDate.getFullYear()
            );
          });

          return (
            <div key={`date-${d}`} className="py-2 relative flex justify-center">
              {apptToday ? (
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-red ${getApptColorClass(
                    apptToday
                  )}`}
                  title={`${apptToday.therapy} with Dr. ${apptToday.doctor?.name}`}
                >
                  {d}
                </span>
              ) : (
                <span className="text-gray-900">{d}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
