import React from "react";

const ReportsProgress = ({ patient }) => {
  if (!patient.reports || !patient.reports.length)
    return (
      <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)]">
        <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Reports & Progress</h3>
        <p className="text-[var(--muted-foreground)]">No reports available.</p>
      </div>
    );

  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)]">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">Reports & Progress</h3>
      <div className="h-64">
        <svg viewBox="0 0 472 150" width="100%" height="100%">
          <path
            d={generatePath(patient.reports)}
            fill="url(#paint0)"
            stroke="#007f80"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="paint0" x1="0" y1="0" x2="0" y2="150">
              <stop stopColor="#007f80" stopOpacity="0.2" />
              <stop offset="1" stopColor="#007f80" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex justify-around text-sm text-[var(--muted-foreground)] mt-2">
        {patient.reports.map((r) => (
          <span key={r.month}>{r.month}</span>
        ))}
      </div>
    </div>
  );
};

// Helper function to generate SVG path
function generatePath(reports) {
  const maxPoints = reports.length;
  if (!maxPoints) return "";
  let path = `M0 ${150 - reports[0].progress}`;
  reports.forEach((r, i) => {
    const x = (i * 472) / maxPoints;
    const y = 150 - r.progress; // invert Y for SVG
    path += ` L${x} ${y}`;
  });
  return path;
}

export default ReportsProgress;
