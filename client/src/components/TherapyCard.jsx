import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

// enable plugin once globally
dayjs.extend(customParseFormat);

const TherapyCard = ({ day, therapy, time, doctor, image, status, paymentStatus, onCancel }) => {
  const [countdown, setCountdown] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });

  useEffect(() => {
    if (paymentStatus === "paid") {
      const interval = setInterval(() => {
        try {
          const targetDateTime = dayjs(`${day} ${time}`, "D/M/YYYY h:mm A").toDate();
          const now = new Date();
          const diff = targetDateTime - now;

          if (!isNaN(targetDateTime.getTime()) && diff > 0) {
            setCountdown({
              days: Math.floor(diff / (1000 * 60 * 60 * 24)),
              hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
              mins: Math.floor((diff / (1000 * 60)) % 60),
              secs: Math.floor((diff / 1000) % 60),
            });
          } else {
            setCountdown({ days: 0, hrs: 0, mins: 0, secs: 0 });
            clearInterval(interval);
          }
        } catch (err) {
          console.error("Timer error:", err);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [day, time, paymentStatus]);

  const bgColor =
    status === "confirmed"
      ? "bg-emerald-100"
      : status === "pending"
      ? "bg-amber-100"
      : "bg-gray-100";

  return (
    <div className={`flex mb-2.5 flex-col  md:flex-row items-start md:items-center justify-between p-4 rounded-lg shadow-xl ${bgColor} gap-4 md:gap-0`}>
      
      {/* LEFT: Appointment Info */}
      <div className="flex  items-start md:items-center gap-4 flex-1 w-full">
        <div
          className="w-20 h-20 md:w-24 md:h-24 bg-cover bg-center rounded-lg flex-shrink-0"
          style={{ backgroundImage: `url(${image || "/default-doctor.png"})` }}
        ></div>

        <div className="flex-1">
          <p className="text-sm text-gray-900 truncate">{day}</p>
          <p className="font-bold truncate">{therapy}</p>
          <p className="text-sm text-gray-900 truncate">{time} | {doctor}</p>
        </div>
      </div>

      {/* RIGHT: Timer + Cancel */}
      <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
        {paymentStatus === "paid" && (
          <div className="flex flex-wrap gap-2 justify-start md:justify-end">
            {["Day", "Hr", "Min", "Sec"].map((label, i) => (
              <div key={label} className="bg-white px-3 py-1 rounded-md shadow text-center min-w-[50px]">
                <p className="text-xs font-bold">{label}</p>
                <p>{[countdown.days, countdown.hrs, countdown.mins, countdown.secs][i]}</p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onCancel}
          className="mt-2 md:mt-0 px-4 py-2 text-sm font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-full md:w-auto"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default TherapyCard;
