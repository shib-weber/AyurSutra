    import React from "react";

    const activities = [
    { icon: "person_add", title: "New Patient Registered", desc: "Sophia Clark registered for Panchakarma", color: "bg-[var(--c-highlight)]" },
    { icon: "check_circle", title: "Therapy Completed", desc: "Ethan Davis completed Abhyanga therapy", color: "bg-[var(--c-success)]" },
    { icon: "calendar_add_on", title: "Appointment Scheduled", desc: "Ava Foster scheduled an appointment for Shirodhara", color: "bg-[var(--c-action-primary)]" },
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
