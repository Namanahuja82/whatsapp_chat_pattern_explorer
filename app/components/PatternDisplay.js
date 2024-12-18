
"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const PatternDisplay = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No patterns to display.</p>;
  }

  return (
    <div className="p-4 mt-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Patterns</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatternDisplay;
