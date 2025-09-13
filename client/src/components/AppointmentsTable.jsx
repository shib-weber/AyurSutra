    import React from "react";

    const appointments = [
    { name: "Punit", therapy: "Shirodhara", date: "2024-07-20", time: "10:00 AM" },
    { name: "Nandini", therapy: "Sleep", date: "2024-07-21", time: "2:00 PM" },
    { name: "Shibjoyti", therapy: "Panchakarma", date: "2024-07-22", time: "9:00 AM" },
    { name: "Harsh", therapy: "Shirodhara", date: "2024-07-20", time: "10:00 AM" },
    { name: "Disha", therapy: "Shirodhara", date: "2024-07-20", time: "10:00 AM" },
    { name: "Misti", therapy: "Shirodhara", date: "2024-07-20", time: "10:00 AM" },
    ];

    const AppointmentsTable = () => {
    return (
        <div className="overflow-x-auto rounded-xl border border-[var(--c-border)] bg-white shadow-sm">
        <table className="w-full text-left">
            <thead className="bg-[var(--c-bg-secondary)]">
            <tr>
                <th className="px-6 py-4 text-sm font-semibold text-[var(--c-text-primary)]">Patient Name</th>
                <th className="px-6 py-4 text-sm font-semibold text-[var(--c-text-primary)]">Therapy</th>
                <th className="px-6 py-4 text-sm font-semibold text-[var(--c-text-primary)]">Date</th>
                <th className="px-6 py-4 text-sm font-semibold text-[var(--c-text-primary)]">Time</th>
                <th className="px-6 py-4 text-sm font-semibold text-[var(--c-text-primary)] text-center">Status</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-[var(--c-border)]">
            {appointments.map((a, idx) => (
                <tr key={idx}>
                <td className="px-6 py-4 text-sm text-[var(--c-text-primary)]">{a.name}</td>
                <td className="px-6 py-4 text-sm text-[var(--c-text-secondary)]">{a.therapy}</td>
                <td className="px-6 py-4 text-sm text-[var(--c-text-secondary)]">{a.date}</td>
                <td className="px-6 py-4 text-sm text-[var(--c-text-secondary)]">{a.time}</td>
                <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    Scheduled
                    </span>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default AppointmentsTable;
