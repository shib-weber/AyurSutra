import React from "react";

const TherapyCard = ({ day, therapy, time, doctor, image }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-amber-800">
      <div
        className="w-24 h-24 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image || "https://via.placeholder.com/150"})` }}
      ></div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400">{day}</p>
        <p className="font-bold">{therapy}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{time} | {doctor}</p>
      </div>
    </div>
  );
};

export default TherapyCard;
