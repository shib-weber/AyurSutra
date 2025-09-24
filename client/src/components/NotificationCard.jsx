import React from "react";

// SVG icons for different notification types
const icons = {
  general: (
    <svg
      className="w-6 h-6 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405M19 10v6H5v-6m14-4H5m14 0l-2 2m0 0l-1.5-1.5M7 7l1.5 1.5"
      ></path>
    </svg>
  ),
  alert: (
    <svg
      className="w-6 h-6 text-red-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01M12 3C7.031 3 3 7.031 3 12s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9z"
      ></path>
    </svg>
  ),
  reminder: (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z"
      ></path>
    </svg>
  ),
};

// Map category → background colors
const bgColors = {
  general: "bg-green-100 hover:bg-green-300",
  pre: "bg-yellow-100 hover:bg-yellow-300",
  post: "bg-blue-100 hover:bg-blue-300",
};

const NotificationCard = ({ type , title, time }) => {
  const bg = bgColors[type] || bgColors.general;

  return (
    <li className={`py-3 mb-4 flex items-start gap-4 ${bg} text-black transition rounded-lg px-3`}>
      <div className="flex-shrink-0 overflow-y-auto w-12 h-12 flex items-center justify-center text-black rounded-full">
        {icons[type] || icons.general}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-900 mt-1">{time}</p>
      </div>
    </li>
  );
};

export default NotificationCard;
