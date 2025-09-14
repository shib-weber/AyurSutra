import React from "react";

const ReportsProgress = () => {
  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)]">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
        Reports & Progress
      </h3>
      <div className="h-64">
        {/* SVG Chart kept as-is */}
        <svg viewBox="0 0 472 150" width="100%" height="100%">
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
            fill="url(#paint0)"
            stroke="#007f80"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="paint0" x1="236" y1="1" x2="236" y2="149">
              <stop stopColor="#007f80" stopOpacity="0.2" />
              <stop offset="1" stopColor="#007f80" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex justify-around text-sm text-[var(--muted-foreground)] mt-2">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
};

export default ReportsProgress;
