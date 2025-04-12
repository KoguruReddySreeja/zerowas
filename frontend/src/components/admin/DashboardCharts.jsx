import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 520 },
  { name: "Mar", value: 610 },
  { name: "Apr", value: 780 },
  { name: "May", value: 900 },
  { name: "Jun", value: 870 },
];

const DashboardChart = ({ type }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        {type === "donations" ? "Food Donations Over Time" : "Active Users"}
      </h2>
      <ResponsiveContainer width="100%" height={250}>
        {type === "donations" ? (
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <Bar dataKey="value" fill="#3b82f6" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
