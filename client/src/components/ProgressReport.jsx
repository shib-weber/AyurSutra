import React from "react";

const ProgressReport = ({ progress }) => {
  if (progress === undefined || progress === null) return null;

  // Determine color based on percentage
  let strokeColor = "#ef4444"; // red
  if (progress >= 25 && progress < 50) strokeColor = "#f59e0b"; // orange
  else if (progress >= 50 && progress < 70) strokeColor = "#facc15"; // yellow
  else if (progress >= 70) strokeColor = "#10b981"; // green

  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20 flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">Healing Progress</h3>
      <svg height={radius * 2} width={radius * 2}>
        {/* Background circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke={strokeColor}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        {/* Percentage text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-2xl font-bold fill-gray-900 "
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressReport;
