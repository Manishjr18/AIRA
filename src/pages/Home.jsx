import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const codeSnippets = [
  `def bug(): return "Bug detected!"`,
  `def loop(x): return [i*2 for i in x]`,
  `def email(e): return "@" in e`,
];

const Home = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Code Snippet Auto-Change
  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(codeInterval);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1, textAlign: "center", mt: 3, mb: 3 }}> 
        {/* AI Welcome Section + CTA */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            AI-Powered Code Review & Bug Detection
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Automatically detect bugs, analyze your code, and get AI-driven suggestions.
          </Typography>
        </motion.div>

        {/* Login to Start or Go to Dashboard */}
        <Box mt={3}>
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, yoyo: Infinity }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: "20px", px: 4 }}
              component={Link}
              to={isLoggedIn ? "/dashboard" : "/login"}
            >
              {isLoggedIn ? "Go to Dashboard" : "Login to Start Analyzing"}
            </Button>
          </motion.div>
        </Box>
        
        {/* 🔥 Real-time Code Analysis Section */}
        <Box mt={4} sx={{ p: 2, background: "#1e1e1e", borderRadius: 2, mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff" }}>
            Real-time Code Analysis Preview
          </Typography>
          <motion.pre
            style={{ background: "#000", color: "#fff", padding: "12px", borderRadius: "5px", textAlign: "left", marginTop: "8px" }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            {codeSnippets[currentCodeIndex]}
          </motion.pre>
        </Box>

        {/* ✅ "Explore All Features" Button (NOW OUTSIDE THE CODE SNIPPET BOX) */}
        {isLoggedIn && (
          <Box mt={3}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, yoyo: Infinity }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: "20px", px: 4 }}
                component={Link}
                to="/features"
              >
                Click here to access all features
              </Button>
            </motion.div>
          </Box>
        )}

        {/* Feature Highlights */}
        <Grid container spacing={3} mt={3}>
          {[
            { title: "Bug Detection", desc: "Find hidden bugs in your code.", icon: "🐛" },
            { title: "Code Analysis", desc: "Deep AI-powered code insights.", icon: "📊" },
            { title: "AI Suggestions", desc: "Optimize code with AI tips.", icon: "🤖" },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={4} sx={{ p: 2.5, textAlign: "center", transition: "0.3s", "&:hover": { transform: "scale(1.05)", boxShadow: 6 } }}>
                <Typography variant="h4">{feature.icon}</Typography>
                <Typography variant="h6" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography color="textSecondary" sx={{ fontSize: "14px" }}>{feature.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%", background: "#000", color: "#fff", textAlign: "center", p: 1, mt: "auto" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Web Warriors. All rights reserved. | Developed by Web Warriors ❤️
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
