    import React from "react";

    const activities = [
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="#1a544a" viewBox="0 0 24 24" width="24" height="24">
  <path d="M15 14c2.67 0 8 1.34 8 4v2h-8v-2c0-1.1-.9-2-2-2H5v-2c0-2.66 5.33-4 8-4z"/>
  <circle cx="9" cy="8" r="4"/>
  <path d="M20 8h-2V6h-2v2h-2v2h2v2h2v-2h2V8z"/>
</svg>
), title: "New Patient Registered", desc: "Punit Agarwal registered for Shirodhara", color: "bg-[var(--c-highlight)]" },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="#34D399" viewBox="0 0 24 24" width="24" height="24">
  <circle cx="12" cy="12" r="10" fill="#34D399"/>
  <path fill="#fff" d="M10 14.5l-3-3 1.41-1.42L10 11.67l5.59-5.59L17 7.5l-7 7z"/>
</svg>
), title: "Therapy Completed", desc: "Nandini completed Sleep therapy", color: "bg-[var(--c-success)]" },
    { icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E9F0EB" width="24" height="24">
  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
</svg>
), title: "Appointment Scheduled", desc: "Shibjyoti scheduled an appointment for Shirodhara", color: "bg-[var(--c-action-primary)]" },
    ];

    const RecentActivities = () => {
    return (
        <div className="space-y-6">
        {activities.map((act, idx) => (
            <div key={idx} className="relative flex gap-4">
            <div className="absolute left-5 top-5 -bottom-5 w-0.5 bg-[var(--c-border)]"></div>
            <div className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${act.color} text-white`}>
                <span className="material-symbols-outlined">{act.icon}</span>
            </div>
            <div className="flex flex-col pt-1.5">
                <p className="font-semibold text-[var(--c-text-primary)]">{act.title}</p>
                <p className="text-sm text-[var(--c-text-secondary)]">{act.desc}</p>
            </div>
            </div>
        ))}
        </div>
    );
    };

    export default RecentActivities;
