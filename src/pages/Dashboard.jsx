import React, { useState, useEffect } from "react";
import { Button, Container, Typography, Box, Grid, Paper, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Dummy success stories (updated with more reviews)
const testimonials = [
  { user: "John D.", feedback: "It has saved hours of debugging!" },
  { user: "Emma W.", feedback: "It improved my code quality!" },
  { user: "Raj K.", feedback: "Amazing tool for detecting vulnerabilities!" },
  { user: "Alice P.", feedback: "Best AI tool for developers, hands down!" },
  { user: "Bob S.", feedback: "My code has never been cleaner!" },
  { user: "Charlie G.", feedback: "A must-have for every developer!" },
  { user: "David L.", feedback: "Revolutionized my coding workflow!" },
  { user: "Eva M.", feedback: "Incredibly accurate bug detection!" },
  { user: "Frank T.", feedback: "The AI suggestions are spot on!" },
  { user: "Grace H.", feedback: "This tool is a game-changer!" },
  { user: "Henry Z.", feedback: "I can't imagine coding without it!" },
  { user: "Ivy Q.", feedback: "Super intuitive and easy to use!" },
  { user: "Jack R.", feedback: "My productivity has doubled!" },
  { user: "Katie S.", feedback: "The best investment for developers!" },
  { user: "Leo M.", feedback: "This tool is pure magic!" },
];

// Small, uniform-length code snippets
const codeSnippets = [
  `def bug(): return "Bug detected!"`,
  `def loop(x): return [i*2 for i in x]`,
  `def email(e): return "@" in e`,
  `def secure(s): return s.replace("<", "&lt;")`,
  `def sql(q): return "DROP" not in q.upper()`,
];

const Dashboard = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [currentTestimonialIndices, setCurrentTestimonialIndices] = useState([0, 1, 2]);
  const theme = useTheme(); // Access the current theme

  // Change code snippet every 3 seconds
  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCurrentCodeIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(codeInterval);
  }, []);

  // Change testimonials every 2 seconds
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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflow: "hidden", backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ flexGrow: 1, textAlign: "center", mt: 4 }}>
        
        {/* AI Welcome Section + CTA */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: theme.palette.text.primary }}>
            AI-Powered Code Review & Bug Detection
          </Typography>
          <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
            Automatically detect bugs, analyze your code, and get AI-driven suggestions.
          </Typography>
        </motion.div>

        <Box mt={3}>
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, yoyo: Infinity }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: "20px", px: 4 }}
              component={Link}
              to="/login"
            >
              Login to Start Analyzing
            </Button>
          </motion.div>
        </Box>

        {/* 🔥 Real-time Code Analysis Section (Moved Up) */}
        <Box mt={5} sx={{ p: 3, background: theme.palette.background.paper, borderRadius: 2, mb: 3 }}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
            Real-time Code Analysis Preview
          </Typography>
          <motion.pre
            style={{
              background: theme.palette.mode === "dark" ? "#000" : "#fff",
              color: theme.palette.text.primary,
              padding: "15px",
              borderRadius: "5px",
              textAlign: "left",
              marginTop: "10px",
            }}
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
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.2 }}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    transition: "0.3s",
                    backgroundColor: theme.palette.background.paper,
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h4">{feature.icon}</Typography>
                  <Typography variant="h5" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: theme.palette.text.secondary }}>{feature.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* 🔥 What Our Users Say (Testimonials) - Now visible in both modes */}
        <Box mt={5} sx={{ textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: theme.palette.text.primary }}>
            What Our Users Say
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {currentTestimonialIndices.map((index, i) => (
              <Grid item xs={12} md={4} key={i}>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: "10px",
                      textAlign: "center",
                      backgroundColor: theme.palette.background.paper,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" sx={{ color: theme.palette.text.primary }}>
                      {testimonials[index].user}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                      "{testimonials[index].feedback}"
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 🔥 Happy Users Stats */}
        <Box mt={5} sx={{ textAlign: "center", p: 3 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: theme.palette.text.primary }}>
            Developers Trust Us
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              { label: "Bugs Fixed", value: "10K+" },
              { label: "Code Reviewed", value: "50M+ Lines" },
              { label: "Developers Helped", value: "25K+" },
            ].map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.2 }}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: "10px",
                      backgroundColor: theme.palette.background.paper,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Typography variant="h4" fontWeight="bold" sx={{ color: theme.palette.primary.main }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Full-Width Footer */}
      <Box sx={{ width: "100%", background: theme.palette.background.paper, color: theme.palette.text.primary, textAlign: "center", p: 1.5, mt: "auto" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} . All rights reserved. | Developed by 💥 Manishjr 🔥
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;