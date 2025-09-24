import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = {
  mood: "#16a34a",
  stress: "#dc2626",
  pain: "#f97316",
  health: "#2563eb",
  energy: "#9333ea",
};

const HealthChart = ({ data }) => {
  const [chartType, setChartType] = useState("bar");

  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Daily Health Progress</h3>
        <p className="text-gray-500 text-center mt-10">No feedback data yet</p>
      </div>
    );
  }

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 5]} allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mood" stroke={COLORS.mood} />
            <Line type="monotone" dataKey="stress" stroke={COLORS.stress} />
            <Line type="monotone" dataKey="pain" stroke={COLORS.pain} />
            <Line type="monotone" dataKey="health" stroke={COLORS.health} />
            <Line type="monotone" dataKey="energy" stroke={COLORS.energy} />
          </LineChart>
        );
      case "bar":
      default:
        return (
          <BarChart data={data} margin={{ top: 20, right: 30, left: -30, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 5]} allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="mood" fill={COLORS.mood} />
            <Bar dataKey="stress" fill={COLORS.stress} />
            <Bar dataKey="pain" fill={COLORS.pain} />
            <Bar dataKey="health" fill={COLORS.health} />
            <Bar dataKey="energy" fill={COLORS.energy} />
          </BarChart>
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold mb-4">Daily Health Progress</h3>

      {/* Chart Type Tabs */}
      <div className="flex relative mb-4 border-b justify-center align-middle gap-[30%] border-gray-200">
        {["bar", "line"].map((type) => (
          <button
            key={type}
            onClick={() => setChartType(type)}
            className={`px-4 py-2 text-sm font-medium relative transition-colors duration-300 ${
              chartType === type ? "text-blue-600" : "text-gray-500"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Chart
          </button>
        ))}

{/* Animated underline */}
<span
  className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300"
  style={{
    width: `${100 / 2}%`, // divide width evenly by number of tabs (2 here)
    left: chartType === "bar" ? "0%" : chartType === "line" ? "50%" : "0%",
  }}
></span>

      </div>

      <div className="h-[400px] ml-0">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HealthChart;
