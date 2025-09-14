import React from "react";

const appointments = [
  { name: "Punit", therapy: "Shirodhara", schedule: "pending", date: "2024-07-20", time: "10:00 AM" },
  { name: "Nandini", therapy: "Sleep", schedule: "done", date: "2024-07-21", time: "2:00 PM" },
  { name: "Shibjyoti", therapy: "Panchakarma", schedule: "scheduled", date: "2024-07-22", time: "9:00 AM" },
  { name: "Harsh", therapy: "Shirodhara", schedule: "scheduled", date: "2024-07-20", time: "10:00 AM" },
  { name: "Disha", therapy: "Shirodhara", schedule: "done", date: "2024-07-20", time: "10:00 AM" },
  { name: "Misti", therapy: "Shirodhara", schedule: "scheduled", date: "2024-07-20", time: "10:00 AM" },
];

const statusStyles = {
  done: "bg-green-100 text-green-800",
  pending: "bg-red-100 text-red-800",
  scheduled: "bg-blue-100 text-blue-800",
};

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
                <span
                  className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium min-w-[90px] ${
                    statusStyles[a.schedule] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {a.schedule.charAt(0).toUpperCase() + a.schedule.slice(1)}
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
