import React from "react";

const NotificationCard = ({ icon, title, time }) => {
  return (
    <li className="py-4 flex items-center gap-4">
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
        {icon || (
          <span className="material-symbols-outlined text-primary">notifications</span>
        )}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-[#1c9494] ">{time}</p>
      </div>
    </li>
  );
};

export default NotificationCard;
