import React from "react";
import {useNavigate} from 'react-router-dom'

const UpcomingAppointments = ({ appointments }) => {
  const navigate = useNavigate()
  if (!appointments || !appointments.length)
    return (
      <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Upcoming Appointments</h3>
        <p className="text-[var(--muted-foreground)]">No upcoming appointments.</p>
      </div>
    );

    
    
  const handleCancel = (id) => {
    console.log("Cancel appointment:", id);
    navigate('/maintainance')
    // Call backend to cancel appointment
  };

  const handleReschedule = (id) => {
    console.log("Reschedule appointment:", id);
    // Navigate or open modal to reschedule
  };

  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Upcoming Appointments</h3>
      <ul className="space-y-4">
        {appointments.map((a) => (
          <li
            key={a._id}
            className="p-4 border border-[var(--border)] rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-[var(--foreground)]">{a.therapyType}</p>
              <p className="text-sm text-[var(--muted-foreground)]">
                {new Date(a.date).toLocaleString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleReschedule(a._id)}
                className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
              >
                Reschedule
              </button>
              <button
                onClick={() => handleCancel(a._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingAppointments;
