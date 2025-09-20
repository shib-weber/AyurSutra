import React from "react";

const TherapySchedule = ({ appointments }) => {
  if (!appointments || !appointments.length) return <p>No scheduled therapy sessions</p>;

  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Scheduled Therapy</h3>
      <ul>
        {appointments.map((a) => (
          <li key={a._id} className="p-2 border-b border-[var(--border)] flex justify-between">
            <span>{a.therapyType}</span>
            <span>{new Date(a.date).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TherapySchedule;
