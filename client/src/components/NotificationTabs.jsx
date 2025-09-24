import React, { useState } from "react";
import NotificationCard from "./NotificationCard";

const categories = ["General", "Medicines", "Pre-Appointment Suggestions", "Post-Appointment Suggestions"];

const NotificationTabs = ({ notifications }) => {
  const [activeTab, setActiveTab] = useState("General");

  const getUnreadCount = (category) =>
    notifications.filter((n) => n.category === category && !n.read).length;

  const filteredNotifications = notifications.filter((n) => n.category === activeTab);

  return (
    <div className="bg-background-light  p-6 rounded-xl shadow-sm  border-primary/10 dark:border-primary/20 h-[350px] flex flex-col">
      {/* Tabs */}
      <div className="flex border-b overflow-y-auto border-gray-300 mb-4 relative">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`relative px-4 py-2 font-semibold transition-colors ${
              activeTab === cat ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
            {getUnreadCount(cat) > 0 && (
              <span className="ml-1 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
                {getUnreadCount(cat)}
              </span>
            )}
            {activeTab === cat && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full animate-slideIn"></span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications */}
      <ul className="flex-1 overflow-y-auto divide-y divide-primary/20 dark:divide-primary/30">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((n) => (
          <NotificationCard
            key={n.id}
            type={n.category}
            title={n.title}
            time={n.time}
          />
          ))
        ) : (
          <p className="text-gray-500 mt-4">No notifications in this category</p>
        )}
      </ul>
    </div>
  );
};

export default NotificationTabs;
