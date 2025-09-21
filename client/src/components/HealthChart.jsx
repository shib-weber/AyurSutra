import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const HealthChart = ({ data }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-sm border border-primary/10 dark:border-primary/20 h-[300px]">
      <h3 className="text-xl font-bold mb-4">Daily Health Progress</h3>
      {data && data.length > 0 ? (
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#059669" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center mt-10">No data available</p>
      )}
    </div>
  );
};

export default HealthChart;
