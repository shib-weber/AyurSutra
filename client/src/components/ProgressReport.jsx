import React from "react";

const ProgressReport = ({ reports }) => {
  if (!reports || reports.length === 0) return null;

  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20">
      <h3 className="text-xl font-bold mb-4">Progress Report</h3>
      {reports.map((r, idx) => (
        <div key={idx} className="mb-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">{r.month}</p>
          <p className="text-4xl font-bold">{r.progress}%</p>
          <p className="text-sm text-primary font-semibold">{r.change}% vs last month</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressReport;
