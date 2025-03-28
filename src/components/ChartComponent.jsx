// // // import React, { useState, useEffect } from "react";
// // // import { Line } from "react-chartjs-2";
// // // import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// // // // ✅ Register Chart.js components
// // // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // // const ChartComponent = () => {
// // //   // ✅ State for real-time chart data
// // //   const [chartData, setChartData] = useState({
// // //     labels: ["0s", "5s", "10s", "15s", "20s", "25s", "30s"], // Time in seconds
// // //     datasets: [
// // //       {
// // //         label: "Code Quality Score",
// // //         data: [85, 87, 86, 88, 90, 92, 94], // Initial values
// // //         borderColor: "#00d9ff",
// // //         backgroundColor: "rgba(238, 245, 247, 0.95)",
// // //         borderWidth: 2,
// // //         tension: 0.3,
// // //       },
// // //     ],
// // //   });

// // //   // ✅ Function to simulate real-time data updates
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setChartData((prevData) => {
// // //         const newData = [...prevData.datasets[0].data, Math.floor(Math.random() * 10) + 85]; // Random score (85-95)
// // //         const newLabels = [...prevData.labels, `${prevData.labels.length * 5}s`]; // New time label

// // //         return {
// // //           labels: newLabels.slice(-7), // Keep only the last 7 data points
// // //           datasets: [{ ...prevData.datasets[0], data: newData.slice(-7) }],
// // //         };
// // //       });
// // //     }, 5000); // ✅ Updates every 5 seconds

// // //     return () => clearInterval(interval); // Cleanup on unmount
// // //   }, []);

// // //   return (
// // //     <div className="chart-container">
// // //       <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
// // //     </div>
// // //   );
// // // };

// // // export default ChartComponent;

// // import React from "react";
// // import { Line } from "react-chartjs-2";
// // import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// // ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// // const ChartComponent = () => {
// //   const data = {
// //     labels: ["10", "20", "30", "40", "50", "60", "70"],
// //     datasets: [
// //       {
// //         label: "Code Quality Score",
// //         data: [75, 80, 78, 82, 85, 90, 88],
// //         borderColor: "rgba(255, 255, 255, 0.9)", // ✅ White Line
// //         backgroundColor: "rgba(255, 255, 255, 0.2)",
// //         pointBackgroundColor: "#fff", // ✅ White Dots
// //         pointBorderColor: "#fff",
// //         borderWidth: 2,
// //       },
// //     ],
// //   };

// //   const options = {
// //     plugins: {
// //       legend: {
// //         labels: {
// //           color: "#ffffff", // ✅ White Legend Text
// //           font: { size: 14 },
// //         },
// //       },
// //     },
// //     scales: {
// //       x: {
// //         ticks: {
// //           color: "#ffffff", // ✅ White X-Axis Labels
// //         },
// //         grid: {
// //           color: "rgba(255, 255, 255, 0.2)", // ✅ Subtle Grid
// //         },
// //       },
// //       y: {
// //         ticks: {
// //           color: "#ffffff", // ✅ White Y-Axis Labels
// //         },
// //         grid: {
// //           color: "rgba(255, 255, 255, 0.2)", // ✅ Subtle Grid
// //         },
// //       },
// //     },
// //   };

// //   return (
// //     <div className="chart-container">
// //       <Line data={data} options={options} />
// //     </div>
// //   );
// // };

// // export default ChartComponent;

// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
// import { Typography, Box } from "@mui/material";

// ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// const ChartComponent = ({ title, data }) => {
//   const options = {
//     plugins: {
//       legend: {
//         labels: {
//           color: "#ffffff", // ✅ White Legend Text
//           font: { size: 14 },
//         },
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#ffffff", // ✅ White X-Axis Labels
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.2)", // ✅ Subtle Grid
//         },
//       },
//       y: {
//         ticks: {
//           color: "#ffffff", // ✅ White Y-Axis Labels
//         },
//         grid: {
//           color: "rgba(255, 255, 255, 0.2)", // ✅ Subtle Grid
//         },
//       },
//     },
//   };

//   return (
//     <Box className="chart-container">
//       <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", mb: 2 }}>
//         {title} {/* ✅ Chart Title */}
//       </Typography>
//       <Line data={data} options={options} />
//     </Box>
//   );
// };

// export default ChartComponent;

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Typography, Box } from "@mui/material";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = ({ title, data }) => {
  const options = {
    maintainAspectRatio: false, // ✅ Allows setting custom height
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // ✅ White Legend Text
          font: { size: 14 },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff", // ✅ White X-Axis Labels
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // ✅ Subtle Grid
        },
      },
      y: {
        ticks: {
          color: "#ffffff", // ✅ White Y-Axis Labels
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // ✅ Subtle Grid
        },
      },
    },
  };

  return (
    <Box className="chart-container">
      <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", mb: 2 }}>
        {title} {/* ✅ Chart Title */}
      </Typography>
      <Box sx={{ height: "250px" }}> {/* ✅ Reduced height */}
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default ChartComponent;
