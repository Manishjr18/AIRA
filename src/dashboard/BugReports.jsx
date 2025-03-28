import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";

const BugReports = () => {
  const bugReports = [
    { id: "#001", file: "app.js", status: "Fixed" },
    { id: "#002", file: "server.py", status: "Pending" },
    { id: "#003", file: "index.html", status: "Fixed" },
    { id: "#004", file: "api.js", status: "Pending" },
  ];

  const chartData = {
    labels: ["Security Issues", "Syntax Errors", "Logical Bugs", "Performance"],
    datasets: [
      {
        label: "Bug Types",
        data: [12, 19, 7, 10],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50"],
      },
    ],
  };

  return (
    <Box className="bug-reports-container">
      <Typography variant="h5" className="bug-reports-title">
        Bug Analysis Reports
      </Typography>
      <Paper className="bug-reports-card">
        {bugReports.map((report) => (
          <motion.div whileHover={{ scale: 1.05 }} key={report.id}>
            <Typography className="bug-report-text">
              {report.id} - {report.file} - <b>{report.status}</b>
            </Typography>
          </motion.div>
        ))}
      </Paper>

      {/* 🛠️ Graph with Smooth Animation */}
      <Box className="graph-container">
        <Typography variant="h5" className="graph-title">
          Bug Trends & Analysis
        </Typography>
        <Paper className="graph-paper">
          <Bar data={chartData} />
        </Paper>
      </Box>
    </Box>
  );
};

export default BugReports;
