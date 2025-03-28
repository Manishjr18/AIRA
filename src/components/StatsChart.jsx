import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
    { "name": "Jan", "bugs": 40, "quality": 78 },
    { "name": "Feb", "bugs": 30, "quality": 85 },
    { "name": "Mar", "bugs": 20, "quality": 90 },
    { "name": "Apr", "bugs": 27, "quality": 88 },
    { "name": "May", "bugs": 18, "quality": 92 },
    { "name": "Jun", "bugs": 10, "quality": 95 },
    { "name": "Jul", "bugs": 15, "quality": 93 },
    { "name": "Aug", "bugs": 22, "quality": 89 },
    { "name": "Sep", "bugs": 25, "quality": 87 },
    { "name": "Oct", "bugs": 28, "quality": 86 },
    { "name": "Nov", "bugs": 35, "quality": 82 },
    { "name": "Dec", "bugs": 38, "quality": 80 }
    ];

const StatsChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="chart-container"
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="bugs" stroke="#ff4d4d" strokeWidth={3} />
          <Line type="monotone" dataKey="quality" stroke="#00d9ff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default StatsChart;
