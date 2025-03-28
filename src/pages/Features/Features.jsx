
// // import React from "react";
// import React, {useEffect, setTheme } from "react";
// import { useAuth } from "../../context/AuthContext"; // ✅ Auth context for login check
// import { useTheme } from "../../context/ThemeContext"; // ✅ Theme context for waves
// import { useNavigate } from "react-router-dom";
// import { Typography, Box } from "@mui/material";
// import "./Features.css"; // ✅ Import CSS for styles


// const Features = () => {
//   const { user } = useAuth(); // ✅ Check if user is logged in
//   const { theme } = useTheme(); // ✅ Get theme for wave effect
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     // setTheme(savedTheme);
//     document.documentElement.setAttribute("data-theme", savedTheme);
//     document.body.setAttribute("data-theme", savedTheme);
//   }, []);
  
  

//   // ✅ Feature list
//   const features = [
//     { title: "🐛 Bug Detection", desc: "Find hidden bugs in your code", path: "/bug-detection" },
//     { title: "📊 Code Analysis", desc: "Deep AI-powered code insights", path: "/code-analysis" },
//     { title: "🤖 AI Suggestions", desc: "Optimize code with AI tips", path: "/ai-suggestions" },
//     { title: "🔍 Code Review", desc: "Comprehensive code quality check", path: "/code-review" },
//     { title: "🔒 Security Check", desc: "Find security vulnerabilities", path: "/security-check" },
//     { title: "📈 Real-Time Graphs", desc: "Live code performance analytics", path: "/real-time-graphs" },
//   ];

 

//   return (
//     <div className="features-container">
//       {/* ✅ Wave Background */}
//       <div className={`wave ${theme === "dark" ? "dark-wave" : "light-wave"}`} />

//       <h1 className="features-title">Explore Our AI-Powered Features</h1>

//       {/* ✅ Feature Boxes */}
//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div 
//             key={index} 
//             className="feature-box"
//             onClick={() => user ? navigate(feature.path) : alert("Login first to use all features.")}
//           >
//             <h2>{feature.title}</h2>
//             <p>{feature.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Bottom Content */}
//       <p className="features-bottom-text">
//         Click on the feature boxes to start using the services.
//       </p>

//       {/* Footer */}
//             <Box sx={{ width: "100%", background: "#000", color: "#fff", textAlign: "center", p: 1.5, mt: "auto" }}>
//               <Typography variant="body2">
//                 © {new Date().getFullYear()} Web Warriors. All rights reserved. | Developed by Web Warriors ❤️
//               </Typography>
//             </Box>
//     </div>
    
//   );
// };

// export default Features;





import React, {useEffect, setTheme } from "react";
import { useAuth } from "../../context/AuthContext"; // ✅ Auth context for login check
import { useTheme } from "../../context/ThemeContext"; // ✅ Theme context for waves
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import "./Features.css"; // ✅ Import CSS for styles


const Features = () => {
  const { user } = useAuth(); // ✅ Check if user is logged in
  const { theme } = useTheme(); // ✅ Get theme for wave effect
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    // setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);
  
  

  // ✅ Feature list
  const features = [
    { title: "🐛 Bug Detection", desc: "Find hidden bugs in your code", path: "/bug-detection" },
    { title: "📊 Code Analysis", desc: "Deep AI-powered code insights", path: "/code-analysis" },
    { title: "🤖 AI Suggestions", desc: "Optimize code with AI tips", path: "/ai-suggestions" },
    { title: "🔍 Code Review", desc: "Comprehensive code quality check", path: "/code-review" },
    { title: "🔒 Security Check", desc: "Find security vulnerabilities", path: "/security-check" },
    { title: "📈 Real-Time Graphs", desc: "Live code performance analytics", path: "/real-time-graphs" },
  ];

 

  return (
    <div className="features-container">
      {/* ✅ Wave Background */}
      <div className={`wave ${theme === "dark" ? "dark-wave" : "light-wave"}`} />

      <h1 className="features-title">Explore Our AI-Powered Features</h1>

      {/* ✅ Feature Boxes */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="feature-box"
            onClick={() => user ? navigate(feature.path) : alert("Login first to use all features.")}
          >
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* ✅ Bottom Content */}
      <p className="features-bottom-text">
        Click on the feature boxes to start using the services.
      </p>

      {/* Footer */}
            <Box sx={{ width: "100%", background: "#000", color: "#fff", textAlign: "center", p: 1.5, mt: "auto" }}>
              <Typography variant="body2">
                © {new Date().getFullYear()} Web Warriors. All rights reserved. | Developed by Web Warriors ❤️
              </Typography>
            </Box>
    </div>
    
  );
};

export default Features;
