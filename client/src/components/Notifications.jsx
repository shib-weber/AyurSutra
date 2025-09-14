import React from "react";

const Notifications = () => {
  const cards = [
    {
      title: "Pre-Therapy Instructions",
      text: "Drink plenty of water before your session.",
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 2h6a2 2 0 012 2v2h1a2 2 0 012 2v12a2 
               2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h1V4a2 2 0 012-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h4"
          />
        </svg>
      ),
    },
    {
      title: "Post-Therapy Instructions",
      text: "Avoid heavy meals for 2 hours after your session.",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M12 
               2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      ),
    },
    {
      title: "Report Ready",
      text: "Your latest blood report is available to view.",
      bg: "bg-green-50",
      iconColor: "text-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)]">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
        Notifications & Reminders
      </h3>

      {/* Card Grid */}
      <div className="grid md:grid-cols-1 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} rounded-xl p-5 shadow hover:shadow-lg transition`}
          >
            <div className="flex items-center gap-4">
              <span className={`${card.iconColor}`}>{card.icon}</span>
              <div>
                <h4 className="font-semibold text-[var(--foreground)] text-lg">
                  {card.title}
                </h4>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
