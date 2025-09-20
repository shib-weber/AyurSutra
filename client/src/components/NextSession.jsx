import React from "react";

const NextSession = () => {
  return (
    <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] mb-8">
      <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
        Next Therapy Session
      </h3>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--primary)] bg-opacity-10 text-[var(--primary)]">
          <span className="material-symbols-outlined text-3xl">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="7" y="3" width="10" height="3" rx="0.8" stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="6.2" y="6.5" width="11.6" height="13" rx="1.2" stroke="#064e3b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.5 11.5h5M12 9v5" stroke="#064e3b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="6.5" y1="17" x2="17.5" y2="17" stroke="#064e3b" strokeWidth="1" strokeLinecap="round"/>
</svg>
          </span>
        </div>
        <div>
          <p className="font-bold text-[var(--foreground)]">Physiotherapy</p>
          <p className="text-sm text-[var(--muted-foreground)]">
            20.09.2025
          </p>
        </div>
      </div>

      <p className="text-sm text-[var(--muted-foreground)] mb-2">Starts in:</p>
      <div className="flex gap-4 text-center">
        {[
          { val: "06", label: "Days" },
          { val: "2", label: "Hours" },
          { val: "30", label: "Minutes" },
        ].map((t, i) => (
          <div
            key={i}
            className="flex-1 bg-[#c9dafc] p-3 rounded-md"
          >
            <div className="text-2xl font-bold text-[var(--foreground)]">
              {t.val}
            </div>
            <div className="text-xs text-[var(--muted-foreground)]">
              {t.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextSession;
