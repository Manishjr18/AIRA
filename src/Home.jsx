import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

// Testimonials & Code Snippets Data (Same as Dashboard.jsx)
const testimonials = [
  { user: "John D.", feedback: "It has saved hours of debugging!" },
  { user: "Emma W.", feedback: "It improved my code quality!" },
  { user: "Raj K.", feedback: "Amazing tool for detecting vulnerabilities!" },
];

const codeSnippets = [
  `def bug(): return "Bug detected!"`,
  `def loop(x): return [i*2 for i in x]`,
  `def email(e): return "@" in e`,
];

const Home = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [currentTestimonialIndices, setCurrentTestimonialIndices] = useState([0, 1, 2]);
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

  // Testimonials Auto-Change
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndices((prevIndices) => {
        const newIndices = prevIndices.map(
          (index) => (index + 1) % testimonials.length
        );
        return newIndices;
      });
    }, 2000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1, textAlign: "center", mt: 4 }}>
        
        {/* AI Welcome Section + CTA */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
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
              to={isLoggedIn ? "/dashboard" : "/login"} // ✅ Dynamic Button
            >
              {isLoggedIn ? "Go to Dashboard" : "Login to Start Analyzing"}
            </Button>
          </motion.div>
        </Box>

        {/* 🔥 Real-time Code Analysis Section */}
        <Box mt={5} sx={{ p: 3, background: "#1e1e1e", borderRadius: 2, mb: 3 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#fff" }}>
            Real-time Code Analysis Preview
          </Typography>
          <motion.pre
            style={{ background: "#000", color: "#fff", padding: "15px", borderRadius: "5px", textAlign: "left", marginTop: "10px" }}
            animate={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            {codeSnippets[currentCodeIndex]}
          </motion.pre>
        </Box>

        {/* Feature Highlights */}
        <Grid container spacing={4} mt={3}>
          {[
            { title: "Bug Detection", desc: "Find hidden bugs in your code.", icon: "🐛" },
            { title: "Code Analysis", desc: "Deep AI-powered code insights.", icon: "📊" },
            { title: "AI Suggestions", desc: "Optimize code with AI tips.", icon: "🤖" },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={4} sx={{ p: 3, textAlign: "center", transition: "0.3s", "&:hover": { transform: "scale(1.05)", boxShadow: 6 } }}>
                <Typography variant="h4">{feature.icon}</Typography>
                <Typography variant="h5" fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography color="textSecondary">{feature.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%", background: "#000", color: "#fff", textAlign: "center", p: 1.5, mt: "auto" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Web Warriors. All rights reserved. | Developed by Web Warriors ❤️
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
