import React, { useEffect, useState } from "react";
import { auth, googleProvider, githubProvider } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { Button, TextField, Box, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  // Redirect if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Email/Password Login
  const handleEmailLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error: ", err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("Account doesn't exist. Please sign up first! 🚨");
          break;
        case "auth/wrong-password":
          setError("Incorrect password! Please try again.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Try again later.");
          break;
        case "auth/user-disabled":
          setError("Your account has been disabled.");
          break;
        case "auth/network-request-failed":
          setError("Network error! Please check your internet connection.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error("Google login error: ", err);
      setError("Failed to log in with Google. Please try again.");
    }
  };

  // GitHub Login
  const handleGitHubLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, githubProvider);
      navigate("/dashboard");
    } catch (err) {
      console.error("GitHub login error: ", err);
      setError("Failed to log in with GitHub. Please try again.");
    }
  };

  // Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      setError("⚠️ Please enter your email to reset password!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
    } catch (err) {
      setError("❌ Error sending reset email: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="animated-bg"></div>
      <Box
        className="login-box"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxWidth: 360,
          margin: "auto",
          mt: 4,
          p: 1.5,
          boxShadow: 3,
          borderRadius: 2,
          background: darkMode ? "#1e1e1e" : "#fff",
          color: darkMode ? "#fff" : "#000",
          zIndex: 2,
        }}
      >
        <Typography variant="h" className="project-title" sx={{ fontSize: "1.25rem" }}>
          <CodeIcon className="project-icon" /> AI Code Reviewer <CodeIcon className="project-icon" />
        </Typography>
        <Typography variant="h" className="login-title" sx={{ fontSize: "1rem" }}>
          Login
        </Typography>
        {error && <Typography color="error" sx={{ fontSize: "0.75rem" }}>{error}</Typography>}
        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& label": { color: darkMode ? "#bbb" : "#333", fontSize: "0.75rem" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: darkMode ? "#bbb" : "#333" },
              "&:hover fieldset": { borderColor: "#6200ea" },
              "&.Mui-focused fieldset": { borderColor: "#6200ea" },
            },
            input: { color: darkMode ? "#fff" : "#000", fontSize: "0.75rem" },
          }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& label": { color: darkMode ? "#bbb" : "#333", fontSize: "0.75rem" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: darkMode ? "#bbb" : "#333" },
              "&:hover fieldset": { borderColor: "#6200ea" },
              "&.Mui-focused fieldset": { borderColor: "#6200ea" },
            },
            input: { color: darkMode ? "#fff" : "#000", fontSize: "0.75rem" },
          }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleEmailLogin} sx={{ fontSize: "0.75rem" }}>
          Login
        </Button>
        <Button color="secondary" onClick={handleForgotPassword} style={{ textTransform: "none", fontSize: "0.75rem" }}>
          Forgot Password?
        </Button>
        {resetEmailSent && <Typography color="green" sx={{ fontSize: "0.75rem" }}>✅ Reset link sent! Check your email.</Typography>}
        <Divider sx={{ my: 1, width: "80%", fontSize: "0.75rem" }}>OR</Divider>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          fullWidth
          onClick={handleGoogleLogin}
          className="animated-btn"
          sx={{ fontSize: "0.75rem" }}
        >
          Login with Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          fullWidth
          onClick={handleGitHubLogin}
          className="animated-btn"
          sx={{ fontSize: "0.75rem" }}
        >
          Login with GitHub
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 0.5, fontSize: "0.75rem" }}>
          Don't have an account?{" "}
          <Button color="primary" onClick={() => navigate("/signup")} style={{ textTransform: "none", fontSize: "0.75rem" }}>
            Sign Up
          </Button>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
