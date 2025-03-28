// // // // // // // // // // import React from "react";
// // // // // // // // // // import { Box, Container, Typography, Grid, Paper } from "@mui/material";
// // // // // // // // // // import Sidebar from "../components/Sidebar"; // ✅ Corrected Path
// // // // // // // // // // import { Bar } from "react-chartjs-2";
// // // // // // // // // // import {
// // // // // // // // // //   Chart as ChartJS,
// // // // // // // // // //   CategoryScale,
// // // // // // // // // //   LinearScale,
// // // // // // // // // //   BarElement,
// // // // // // // // // //   Title,
// // // // // // // // // //   Tooltip,
// // // // // // // // // //   Legend,
// // // // // // // // // // } from "chart.js";

// // // // // // // // // // // Chart.js register
// // // // // // // // // // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // // // // // // // // // const Dashboard = () => {
// // // // // // // // // //   // Dummy User Stats
// // // // // // // // // //   const userStats = [
// // // // // // // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // // // // // // //     { label: "Bugs Found", value: "120+" },
// // // // // // // // // //     { label: "Code Quality Score", value: "85%" },
// // // // // // // // // //   ];

// // // // // // // // // //   // Dummy Bug Reports
// // // // // // // // // //   const bugReports = [
// // // // // // // // // //     { id: "#001", file: "app.js", status: "Fixed" },
// // // // // // // // // //     { id: "#002", file: "server.py", status: "Pending" },
// // // // // // // // // //     { id: "#003", file: "index.html", status: "Fixed" },
// // // // // // // // // //     { id: "#004", file: "api.js", status: "Pending" },
// // // // // // // // // //   ];

// // // // // // // // // //   // Chart Data
// // // // // // // // // //   const chartData = {
// // // // // // // // // //     labels: ["Security Issues", "Syntax Errors", "Logical Bugs", "Performance"],
// // // // // // // // // //     datasets: [
// // // // // // // // // //       {
// // // // // // // // // //         label: "Bug Types",
// // // // // // // // // //         data: [12, 19, 7, 10],
// // // // // // // // // //         backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4caf50"],
// // // // // // // // // //       },
// // // // // // // // // //     ],
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <Box sx={{ display: "flex", bgcolor: "#f5f5f5", height: "100vh" }}>
// // // // // // // // // //       <Sidebar />
// // // // // // // // // //       <Box sx={{ flexGrow: 1 }}>
// // // // // // // // // //         <Container sx={{ mt: 10, p: 3 }}>
// // // // // // // // // //           <Typography variant="h4" fontWeight="bold">
// // // // // // // // // //             User Dashboard
// // // // // // // // // //           </Typography>
// // // // // // // // // //           <Typography color="textSecondary">Your latest code analysis stats and reports</Typography>

// // // // // // // // // //           {/* User Stats */}
// // // // // // // // // //           <Grid container spacing={3} mt={3}>
// // // // // // // // // //             {userStats.map((stat, index) => (
// // // // // // // // // //               <Grid item xs={12} md={4} key={index}>
// // // // // // // // // //                 <Paper sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
// // // // // // // // // //                   <Typography variant="h5" fontWeight="bold">
// // // // // // // // // //                     {stat.value}
// // // // // // // // // //                   </Typography>
// // // // // // // // // //                   <Typography color="textSecondary">{stat.label}</Typography>
// // // // // // // // // //                 </Paper>
// // // // // // // // // //               </Grid>
// // // // // // // // // //             ))}
// // // // // // // // // //           </Grid>

// // // // // // // // // //           {/* Bug Reports */}
// // // // // // // // // //           <Box mt={5}>
// // // // // // // // // //             <Typography variant="h5" fontWeight="bold">
// // // // // // // // // //               Bug Analysis Reports
// // // // // // // // // //             </Typography>
// // // // // // // // // //             <Paper sx={{ p: 3, boxShadow: 3 }}>
// // // // // // // // // //               {bugReports.map((report) => (
// // // // // // // // // //                 <Typography key={report.id} sx={{ mb: 1 }}>
// // // // // // // // // //                   {report.id} - {report.file} - <b>{report.status}</b>
// // // // // // // // // //                 </Typography>
// // // // // // // // // //               ))}
// // // // // // // // // //             </Paper>
// // // // // // // // // //           </Box>

// // // // // // // // // //           {/* Charts */}
// // // // // // // // // //           <Box mt={5}>
// // // // // // // // // //             <Typography variant="h5" fontWeight="bold">
// // // // // // // // // //               Bug Trends & Analysis
// // // // // // // // // //             </Typography>
// // // // // // // // // //             <Paper sx={{ p: 3, boxShadow: 3 }}>
// // // // // // // // // //               <Bar data={chartData} />
// // // // // // // // // //             </Paper>
// // // // // // // // // //           </Box>
// // // // // // // // // //         </Container>
// // // // // // // // // //       </Box>
// // // // // // // // // //     </Box>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Dashboard;

// // // // // // // // // // 📌 src/dashboard/Dashboard.jsx (Updated)

// // // // // // // // // import React from "react";
// // // // // // // // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // // // // // // // import Sidebar from "../components/Sidebar";
// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import "../styles/Dashboard.css"; // ✅ Custom CSS for High-Tech Look

// // // // // // // // // const Dashboard = () => {
// // // // // // // // //   const userStats = [
// // // // // // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // // // // // //     { label: "Bugs Found", value: "120+" },
// // // // // // // // //     { label: "Code Quality Score", value: "85%" },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <Box className="dashboard">
// // // // // // // // //       <Sidebar />
// // // // // // // // //       <Box sx={{ flexGrow: 1 }}>
// // // // // // // // //         <Container sx={{ mt: 10, p: 3 }}>
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: -20 }}
// // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.5 }}
// // // // // // // // //           >
// // // // // // // // //             <Typography variant="h4" className="dashboard-title">
// // // // // // // // //               🚀 AI-Powered Code Review Dashboard
// // // // // // // // //             </Typography>
// // // // // // // // //             <Typography className="dashboard-subtitle">
// // // // // // // // //               Your latest code analysis stats and reports
// // // // // // // // //             </Typography>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <Grid container spacing={3} mt={3}>
// // // // // // // // //             {userStats.map((stat, index) => (
// // // // // // // // //               <Grid item xs={12} md={4} key={index}>
// // // // // // // // //                 <motion.div
// // // // // // // // //                   className="dashboard-card"
// // // // // // // // //                   whileHover={{ scale: 1.1 }}
// // // // // // // // //                   transition={{ duration: 0.3 }}
// // // // // // // // //                 >
// // // // // // // // //                   <Typography className="dashboard-stat-value">{stat.value}</Typography>
// // // // // // // // //                   <Typography className="dashboard-stat-label">{stat.label}</Typography>
// // // // // // // // //                 </motion.div>
// // // // // // // // //               </Grid>
// // // // // // // // //             ))}
// // // // // // // // //           </Grid>
// // // // // // // // //         </Container>
// // // // // // // // //       </Box>
// // // // // // // // //     </Box>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Dashboard;

// // // // // // // // // import React from "react";
// // // // // // // // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // // // // // // // import Sidebar from "../components/Sidebar";
// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import "../styles/Dashboard.css";

// // // // // // // // // const Dashboard = () => {
// // // // // // // // //   const userStats = [
// // // // // // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // // // // // //     { label: "Bugs Found", value: "120+" },
// // // // // // // // //     { label: "Code Quality Score", value: "85%" },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <Box className="dashboard">
// // // // // // // // //       <Sidebar /> {/* ✅ Sidebar already has Navbar, so no extra Navbar here! */}
// // // // // // // // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // // // // // // // //         <Container sx={{ mt: 8 }}>
// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: -20 }}
// // // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.5 }}
// // // // // // // // //             className="dashboard-header"
// // // // // // // // //           >
// // // // // // // // //             <Typography variant="h3" className="dashboard-title">
// // // // // // // // //               🚀 AI-Powered Code Review Dashboard
// // // // // // // // //             </Typography>
// // // // // // // // //             <Typography variant="h6" className="dashboard-subtitle">
// // // // // // // // //               Your latest code analysis stats and reports
// // // // // // // // //             </Typography>
// // // // // // // // //           </motion.div>

// // // // // // // // //           <Grid container spacing={3} mt={3}>
// // // // // // // // //             {userStats.map((stat, index) => (
// // // // // // // // //               <Grid item xs={12} md={4} key={index}>
// // // // // // // // //                 <motion.div
// // // // // // // // //                   className="dashboard-card"
// // // // // // // // //                   whileHover={{ scale: 1.1 }}
// // // // // // // // //                   transition={{ duration: 0.3 }}
// // // // // // // // //                 >
// // // // // // // // //                   <Typography className="dashboard-stat-value">{stat.value}</Typography>
// // // // // // // // //                   <Typography className="dashboard-stat-label">{stat.label}</Typography>
// // // // // // // // //                 </motion.div>
// // // // // // // // //               </Grid>
// // // // // // // // //             ))}
// // // // // // // // //           </Grid>
// // // // // // // // //         </Container>
// // // // // // // // //       </Box>
// // // // // // // // //     </Box>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Dashboard;

// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // // // // // // import Sidebar from "../components/Sidebar";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import "../styles/Dashboard.css";

// // // // // // // // const Dashboard = () => {
// // // // // // // //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// // // // // // // //   useEffect(() => {
// // // // // // // //     document.documentElement.setAttribute("data-theme", theme);
// // // // // // // //   }, [theme]);

// // // // // // // //   // Dummy Stats
// // // // // // // //   const userStats = [
// // // // // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // // // // //     { label: "Bugs Found", value: "120+" },
// // // // // // // //     { label: "Code Quality Score", value: "85%" },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <Box className="dashboard">
// // // // // // // //       <Sidebar />
// // // // // // // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // // // // // // //         <Container sx={{ mt: 8 }}>
// // // // // // // //           <motion.div
// // // // // // // //             initial={{ opacity: 0, y: -20 }}
// // // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // // //             transition={{ duration: 0.5 }}
// // // // // // // //             className="dashboard-header"
// // // // // // // //           >
// // // // // // // //             <Typography variant="h3" className="dashboard-title">
// // // // // // // //               🚀 AI-Powered Code Review Dashboard
// // // // // // // //             </Typography>
// // // // // // // //             <Typography variant="h6" className="dashboard-subtitle">
// // // // // // // //               Your latest code analysis stats and reports
// // // // // // // //             </Typography>
// // // // // // // //           </motion.div>

// // // // // // // //           <Grid container spacing={3} mt={3}>
// // // // // // // //             {userStats.map((stat, index) => (
// // // // // // // //               <Grid item xs={12} md={4} key={index}>
// // // // // // // //                 <motion.div
// // // // // // // //                   className="dashboard-card"
// // // // // // // //                   whileHover={{ scale: 1.1 }}
// // // // // // // //                   transition={{ duration: 0.3 }}
// // // // // // // //                 >
// // // // // // // //                   <Typography className="dashboard-stat-value">{stat.value}</Typography>
// // // // // // // //                   <Typography className="dashboard-stat-label">{stat.label}</Typography>
// // // // // // // //                 </motion.div>
// // // // // // // //               </Grid>
// // // // // // // //             ))}
// // // // // // // //           </Grid>
// // // // // // // //         </Container>
// // // // // // // //       </Box>
// // // // // // // //     </Box>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Dashboard;

// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { Box, Container, Typography, Grid, Button } from "@mui/material";
// // // // // // // import Sidebar from "../components/Sidebar";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import "../styles/Dashboard.css";

// // // // // // // const Dashboard = () => {
// // // // // // //   // Theme State
// // // // // // //   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

// // // // // // //   useEffect(() => {
// // // // // // //     document.documentElement.setAttribute("data-theme", theme);
// // // // // // //     localStorage.setItem("theme", theme);
// // // // // // //   }, [theme]);

// // // // // // //   const toggleTheme = () => {
// // // // // // //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
// // // // // // //   };

// // // // // // //   // Dummy Stats
// // // // // // //   const userStats = [
// // // // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // // // //     { label: "Bugs Found", value: "120+" },
// // // // // // //     { label: "Code Quality Score", value: "85%" },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <Box className="dashboard">
// // // // // // //       <Sidebar />
// // // // // // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // // // // // //         <Container sx={{ mt: 8 }}>
// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, y: -20 }}
// // // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.5 }}
// // // // // // //             className="dashboard-header"
// // // // // // //           >
// // // // // // //             <Typography variant="h3" className="dashboard-title">
// // // // // // //               🚀 AI-Powered Code Review Dashboard
// // // // // // //             </Typography>
// // // // // // //             <Typography variant="h6" className="dashboard-subtitle">
// // // // // // //               Your latest code analysis stats and reports
// // // // // // //             </Typography>
// // // // // // //           </motion.div>

// // // // // // //           {/* ✅ Theme Toggle Button */}
// // // // // // //           <Box textAlign="center" my={2}>
// // // // // // //             <Button variant="contained" onClick={toggleTheme}>
// // // // // // //               {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
// // // // // // //             </Button>
// // // // // // //           </Box>

// // // // // // //           <Grid container spacing={3} mt={3}>
// // // // // // //             {userStats.map((stat, index) => (
// // // // // // //               <Grid item xs={12} md={4} key={index}>
// // // // // // //                 <motion.div
// // // // // // //                   className="dashboard-card"
// // // // // // //                   whileHover={{ scale: 1.1 }}
// // // // // // //                   transition={{ duration: 0.3 }}
// // // // // // //                 >
// // // // // // //                   <Typography className="dashboard-stat-value">{stat.value}</Typography>
// // // // // // //                   <Typography className="dashboard-stat-label">{stat.label}</Typography>
// // // // // // //                 </motion.div>
// // // // // // //               </Grid>
// // // // // // //             ))}
// // // // // // //           </Grid>
// // // // // // //         </Container>
// // // // // // //       </Box>
// // // // // // //     </Box>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Dashboard;

// // // // // // import React from "react";
// // // // // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // // // // import Sidebar from "../components/Sidebar";
// // // // // // import { motion } from "framer-motion";
// // // // // // import "../styles/Dashboard.css";

// // // // // // const Dashboard = () => {
// // // // // //   const userStats = [
// // // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // // //     { label: "Bugs Found", value: "120+" },
// // // // // //     { label: "Code Quality Score", value: "85%" },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <Box className="dashboard">
// // // // // //       <Sidebar /> {/* ✅ Sidebar already has Navbar, so no extra Navbar here! */}
// // // // // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // // // // //         <Container sx={{ mt: 8 }}>
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: -20 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.5 }}
// // // // // //             className="dashboard-header"
// // // // // //           >
// // // // // //             <Typography variant="h3" className="dashboard-title">
// // // // // //               🚀 AI-Powered Code Review Dashboard
// // // // // //             </Typography>
// // // // // //             <Typography variant="h6" className="dashboard-subtitle">
// // // // // //               Your latest code analysis stats and reports
// // // // // //             </Typography>
// // // // // //           </motion.div>

// // // // // //           <Grid container spacing={3} mt={3}>
// // // // // //             {userStats.map((stat, index) => (
// // // // // //               <Grid item xs={12} md={4} key={index}>
// // // // // //                 <motion.div
// // // // // //                   className="dashboard-card"
// // // // // //                   whileHover={{ scale: 1.1 }}
// // // // // //                   transition={{ duration: 0.3 }}
// // // // // //                 >
// // // // // //                   <Typography className="dashboard-stat-value">{stat.value}</Typography>
// // // // // //                   <Typography className="dashboard-stat-label">{stat.label}</Typography>
// // // // // //                 </motion.div>
// // // // // //               </Grid>
// // // // // //             ))}
// // // // // //           </Grid>
// // // // // //         </Container>
// // // // // //       </Box>
// // // // // //     </Box>
// // // // // //   );
// // // // // // };

// // // // // // export default Dashboard;
// // // // // import React, { useEffect } from "react";
// // // // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // // // import Sidebar from "../components/Sidebar";
// // // // // import { motion } from "framer-motion";
// // // // // import "../styles/Dashboard.css";

// // // // // const Dashboard = () => {
// // // // //   // ✅ Apply Global Theme When Dashboard Loads
// // // // //   useEffect(() => {
// // // // //     const theme = localStorage.getItem("theme") || "light"; // Get saved theme
// // // // //     document.body.setAttribute("data-theme", theme);
// // // // //   }, []);

// // // // //   const userStats = [
// // // // //     { label: "Total Code Scanned", value: "450+" },
// // // // //     { label: "Bugs Found", value: "120+" },
// // // // //     { label: "Code Quality Score", value: "85%" },
// // // // //   ];

// // // // //   return (
// // // // //     <Box className="dashboard">
// // // // //       <Sidebar /> {/* ✅ Sidebar already has Navbar, no extra Navbar needed! */}
// // // // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // // // //         <Container sx={{ mt: 8 }}>
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: -20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.5 }}
// // // // //             className="dashboard-header"
// // // // //           >
// // // // //             <Typography variant="h3" className="dashboard-title">
// // // // //               🚀 AI-Powered Code Review Dashboard
// // // // //             </Typography>
// // // // //             <Typography variant="h6" className="dashboard-subtitle">
// // // // //               Your latest code analysis stats and reports
// // // // //             </Typography>
// // // // //           </motion.div>

// // // // //           <Grid container spacing={3} mt={3}>
// // // // //             {userStats.map((stat, index) => (
// // // // //               <Grid item xs={12} md={4} key={index}>
// // // // //                 <motion.div
// // // // //                   className="dashboard-card"
// // // // //                   whileHover={{ scale: 1.1 }}
// // // // //                   transition={{ duration: 0.3 }}
// // // // //                 >
// // // // //                   <Typography className="dashboard-stat-value">{stat.value}</Typography>
// // // // //                   <Typography className="dashboard-stat-label">{stat.label}</Typography>
// // // // //                 </motion.div>
// // // // //               </Grid>
// // // // //             ))}
// // // // //           </Grid>
// // // // //         </Container>
// // // // //       </Box>
// // // // //     </Box>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;

// // // // import React, { useEffect } from "react";
// // // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // // import Sidebar from "../components/Sidebar";
// // // // import { motion } from "framer-motion";
// // // // import "../styles/Dashboard.css";

// // // // const Dashboard = () => {
// // // //   // ✅ Apply saved theme on Dashboard Load
// // // //   useEffect(() => {
// // // //     const theme = localStorage.getItem("theme") || "light";
// // // //     document.body.setAttribute("data-theme", theme);
// // // //   }, []);

// // // //   return (
// // // //     <Box className="dashboard">
// // // //       <Sidebar />
// // // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // // //         <Container sx={{ mt: 8 }}>
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.5 }}
// // // //             className="dashboard-header"
// // // //           >
// // // //             <Typography variant="h3" className="dashboard-title">
// // // //               🚀 AI-Powered Code Review Dashboard
// // // //             </Typography>
// // // //             <Typography variant="h6" className="dashboard-subtitle">
// // // //               Your latest code analysis stats and reports
// // // //             </Typography>
// // // //           </motion.div>

// // // //           <Grid container spacing={3} mt={3}>
// // // //             <Grid item xs={12} md={4}>
// // // //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// // // //                 <Typography className="dashboard-stat-value">450+</Typography>
// // // //                 <Typography className="dashboard-stat-label">Total Code Scanned</Typography>
// // // //               </motion.div>
// // // //             </Grid>
// // // //             <Grid item xs={12} md={4}>
// // // //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// // // //                 <Typography className="dashboard-stat-value">120+</Typography>
// // // //                 <Typography className="dashboard-stat-label">Bugs Found</Typography>
// // // //               </motion.div>
// // // //             </Grid>
// // // //             <Grid item xs={12} md={4}>
// // // //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// // // //                 <Typography className="dashboard-stat-value">85%</Typography>
// // // //                 <Typography className="dashboard-stat-label">Code Quality Score</Typography>
// // // //               </motion.div>
// // // //             </Grid>
// // // //           </Grid>
// // // //         </Container>
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default Dashboard;


// // // import React, { useEffect, useState } from "react";
// // // import { Box, Container, Typography, Grid } from "@mui/material";
// // // import Sidebar from "../components/Sidebar";
// // // import { motion } from "framer-motion";
// // // import "../styles/Dashboard.css";
// // // import StatsChart from "../components/StatsChart";

// // // const Dashboard = () => {
// // //   const [stats, setStats] = useState({
// // //     totalScanned: 450,
// // //     bugsFound: 120,
// // //     codeQuality: 85,
// // //   });

// // //   // ✅ Sync Dark Mode with Navbar
// // //   useEffect(() => {
// // //     const theme = localStorage.getItem("theme") || "light";
// // //     document.body.setAttribute("data-theme", theme);
// // //   }, []);

// // //   return (
// // //     <Box className="dashboard">
// // //       <Sidebar />
// // //       <Box sx={{ flexGrow: 1, p: 3 }}>
// // //         <Container sx={{ mt: 8 }}>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //             className="dashboard-header"
// // //           >
// // //             <Typography variant="h3" className="dashboard-title">
// // //               🚀 AI-Powered Code Review Dashboard
// // //             </Typography>
// // //             <Typography variant="h6" className="dashboard-subtitle">
// // //               Your latest code analysis stats and reports
// // //             </Typography>
// // //           </motion.div>

// // //           {/* ✅ Live Stats Section */}
// // //           <Grid container spacing={3} mt={3}>
// // //             <Grid item xs={12} md={4}>
// // //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// // //                 <Typography className="dashboard-stat-value">{stats.totalScanned}+</Typography>
// // //                 <Typography className="dashboard-stat-label">Total Code Scanned</Typography>
// // //               </motion.div>
// // //             </Grid>
// // //             <Grid item xs={12} md={4}>
// // //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// // //                 <Typography className="dashboard-stat-value">{stats.bugsFound}+</Typography>
// // //                 <Typography className="dashboard-stat-label">Bugs Found</Typography>
// // //               </motion.div>
// // //             </Grid>
// // //             <Grid item xs={12} md={4}>
// // //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// // //                 <Typography className="dashboard-stat-value">{stats.codeQuality}%</Typography>
// // //                 <Typography className="dashboard-stat-label">Code Quality Score</Typography>
// // //               </motion.div>
// // //             </Grid>
// // //           </Grid>

// // //           {/* ✅ Analytics Chart */}
// // //           <Grid container spacing={3} mt={3}>
// // //             <Grid item xs={12} md={8}>
// // //               <StatsChart />
// // //             </Grid>
// // //           </Grid>
// // //         </Container>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Dashboard;

// // import React, { useEffect, useState } from "react";
// // import { Box, Container, Typography, Grid } from "@mui/material";
// // import Sidebar from "../components/Sidebar";
// // import { motion } from "framer-motion";
// // import "../styles/Dashboard.css";
// // import StatsChart from "../components/StatsChart";
// // import ChartComponent from "../components/ChartComponent"; // ✅ New Chart Component

// // const Dashboard = () => {
// //   const [stats, setStats] = useState({
// //     totalScanned: 450,
// //     bugsFound: 120,
// //     codeQuality: 85,
// //   });

// //   // ✅ Sync Dark Mode with Navbar
// //   useEffect(() => {
// //     const theme = localStorage.getItem("theme") || "light";
// //     document.body.setAttribute("data-theme", theme);
// //   }, []);

// //   // ✅ Simulate Real-Time Data Updates (Every 5 Seconds)
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setStats((prevStats) => ({
// //         totalScanned: prevStats.totalScanned + Math.floor(Math.random() * 10), // Random increment
// //         bugsFound: prevStats.bugsFound + Math.floor(Math.random() * 5),
// //         codeQuality: Math.min(100, prevStats.codeQuality + (Math.random() > 0.5 ? 1 : -1)), // Fluctuates slightly
// //       }));
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <Box className="dashboard">
// //       <Sidebar />
// //       <Box sx={{ flexGrow: 1, p: 3 }}>
// //         <Container sx={{ mt: 8 }}>
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className="dashboard-header"
// //           >
// //             <Typography variant="h3" className="dashboard-title">
// //               🚀 AI-Powered Code Review Dashboard
// //             </Typography>
// //             <Typography variant="h6" className="dashboard-subtitle">
// //               Your latest code analysis stats and reports
// //             </Typography>
// //           </motion.div>

// //           {/* ✅ Live Stats Section */}
// //           <Grid container spacing={3} mt={3}>
// //             <Grid item xs={12} md={4}>
// //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// //                 <Typography className="dashboard-stat-value">{stats.totalScanned}+</Typography>
// //                 <Typography className="dashboard-stat-label">Total Code Scanned</Typography>
// //               </motion.div>
// //             </Grid>
// //             <Grid item xs={12} md={4}>
// //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// //                 <Typography className="dashboard-stat-value">{stats.bugsFound}+</Typography>
// //                 <Typography className="dashboard-stat-label">Bugs Found</Typography>
// //               </motion.div>
// //             </Grid>
// //             <Grid item xs={12} md={4}>
// //               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
// //                 <Typography className="dashboard-stat-value">{stats.codeQuality}%</Typography>
// //                 <Typography className="dashboard-stat-label">Code Quality Score</Typography>
// //               </motion.div>
// //             </Grid>
// //           </Grid>

// //           {/* ✅ Analytics Charts */}
// //           <Grid container spacing={3} mt={3}>
// //             <Grid item xs={12} md={8}>
// //               <StatsChart />
// //             </Grid>
// //             <Grid item xs={12} md={8}>
// //               <ChartComponent /> {/* ✅ New Real-Time Chart */}
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Dashboard;


// import React, { useEffect, useState } from "react";
// import { Box, Container, Typography, Grid } from "@mui/material";
// import Sidebar from "../components/Sidebar";
// import { motion } from "framer-motion";
// import "../styles/Dashboard.css";
// import ChartComponent from "../components/ChartComponent";

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalScanned: 450,
//     bugsFound: 120,
//     codeQuality: 85,
//   });

//   const codeQualityData = {
//     labels: ["10", "20", "30", "40", "50", "60", "70"],
//     datasets: [
//       {
//         label: "Code Quality Score",
//         data: [75, 80, 78, 82, 85, 90, 88],
//         borderColor: "rgba(255, 255, 255, 0.9)",
//         backgroundColor: "rgba(255, 255, 255, 0.2)",
//         pointBackgroundColor: "#fff",
//         pointBorderColor: "#fff",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const bugDetectionData = {
//     labels: ["10", "20", "30", "40", "50", "60", "70"],
//     datasets: [
//       {
//         label: "Bugs Found Over Time",
//         data: [10, 15, 12, 20, 18, 25, 30],
//         borderColor: "rgba(255, 0, 0, 0.9)",
//         backgroundColor: "rgba(255, 0, 0, 0.2)",
//         pointBackgroundColor: "#ff0000",
//         pointBorderColor: "#ff0000",
//         borderWidth: 2,
//       },
//     ],
//   };

//   // ✅ Sync Dark Mode with Navbar
//   useEffect(() => {
//     const theme = localStorage.getItem("theme") || "light";
//     document.body.setAttribute("data-theme", theme);
//   }, []);

//   return (
//     <Box className="dashboard">
//       <Sidebar />
//       <Box sx={{ flexGrow: 1, p: 3 }}>
//         <Container sx={{ mt: 8 }}>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="dashboard-header"
//           >
//             <Typography variant="h3" className="dashboard-title">
//               🚀 AI-Powered Code Review Dashboard
//             </Typography>
//             <Typography variant="h6" className="dashboard-subtitle">
//               Your latest code analysis stats and reports
//             </Typography>
//           </motion.div>

//           {/* ✅ Live Stats Section */}
//           <Grid container spacing={3} mt={3}>
//             <Grid item xs={12} md={4}>
//               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
//                 <Typography className="dashboard-stat-value">{stats.totalScanned}+</Typography>
//                 <Typography className="dashboard-stat-label">Total Code Scanned</Typography>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
//                 <Typography className="dashboard-stat-value">{stats.bugsFound}+</Typography>
//                 <Typography className="dashboard-stat-label">Bugs Found</Typography>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
//                 <Typography className="dashboard-stat-value">{stats.codeQuality}%</Typography>
//                 <Typography className="dashboard-stat-label">Code Quality Score</Typography>
//               </motion.div>
//             </Grid>
//           </Grid>

//           {/* ✅ Analytics Charts (Same Length) */}
//           <Grid container spacing={3} mt={3}>
//             <Grid item xs={12} md={8}>
//               <ChartComponent title="📊 Code Quality Over Time" data={codeQualityData} />
//             </Grid>
//             <Grid item xs={12} md={8}>
//               <ChartComponent title="🐞 Bug Detection Trends" data={bugDetectionData} />
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import "../styles/Dashboard.css";
import ChartComponent from "../components/ChartComponent";

const Dashboard = () => {
  const [stats] = useState({
    totalScanned: 450,
    bugsFound: 120,
    codeQuality: 85,
  });

  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  };

  const [codeQualityData, setCodeQualityData] = useState({
    labels: ["10", "20", "30", "40", "50", "60", "70"],
    datasets: [
      {
        label: "Code Quality Score",
        data: generateRandomData(),
        borderColor: "rgba(255, 255, 255, 0.9)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#fff",
        borderWidth: 2,
      },
    ],
  });

  const [bugDetectionData, setBugDetectionData] = useState({
    labels: ["10", "20", "30", "40", "50", "60", "70"],
    datasets: [
      {
        label: "Bugs Found Over Time",
        data: generateRandomData(),
        borderColor: "rgba(255, 0, 0, 0.9)",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        pointBackgroundColor: "#ff0000",
        pointBorderColor: "#ff0000",
        borderWidth: 2,
      },
    ],
  });

  // ✅ Real-Time Update Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeQualityData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: generateRandomData(),
          },
        ],
      }));

      setBugDetectionData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: generateRandomData(),
          },
        ],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Sync Dark Mode with Navbar
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", theme);
  }, []);

  return (
    <Box className="dashboard">
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Container sx={{ mt: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="dashboard-header"
          >
            <Typography variant="h3" className="dashboard-title">
              🚀 AI-Powered Code Review Dashboard
            </Typography>
            <Typography variant="h6" className="dashboard-subtitle">
              Your latest code analysis stats and reports
            </Typography>
          </motion.div>

          {/* ✅ Live Stats Section */}
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={4}>
              <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
                <Typography className="dashboard-stat-value">{stats.totalScanned}+</Typography>
                <Typography className="dashboard-stat-label">Total Code Scanned</Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
                <Typography className="dashboard-stat-value">{stats.bugsFound}+</Typography>
                <Typography className="dashboard-stat-label">Bugs Found</Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div className="dashboard-card" whileHover={{ scale: 1.1 }}>
                <Typography className="dashboard-stat-value">{stats.codeQuality}%</Typography>
                <Typography className="dashboard-stat-label">Code Quality Score</Typography>
              </motion.div>
            </Grid>
          </Grid>

          {/* ✅ Real-Time Analytics Charts (Reduced Height) */}
          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={8}>
              <ChartComponent title="📊 Code Quality Over Time" data={codeQualityData} />
            </Grid>
            <Grid item xs={12} md={8}>
              <ChartComponent title="🐞 Bug Detection Trends" data={bugDetectionData} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
