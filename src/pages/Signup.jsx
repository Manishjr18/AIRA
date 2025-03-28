import React, { useState } from "react";
import { auth, db, googleProvider, githubProvider } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Button, TextField, Box, Typography, Checkbox, FormControlLabel, Divider, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import CodeIcon from "@mui/icons-material/Code";
import "../styles/signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const passwordCriteria = [
    { label: "8-32 characters", test: (pwd) => pwd.length >= 8 && pwd.length <= 32 },
    { label: "1 uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
    { label: "1 lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
    { label: "1 number", test: (pwd) => /\d/.test(pwd) },
    { label: "1 special character", test: (pwd) => /[\W_]/.test(pwd) },
  ];

  const handleSignup = async () => {
    setError("");
    if (!agree) {
      setError("You must agree to the Terms & Conditions.");
      return;
    }
    if (passwordCriteria.some((c) => !c.test(password))) {
      setError("Password must meet all criteria.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user); // Send verification email
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
        emailVerified: user.emailVerified,
      });
      navigate("/verify-email"); // Redirect to verify-email page
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOAuthSignup = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
        emailVerified: user.emailVerified,
      });
      navigate("/dashboard"); // OAuth users are typically verified, so redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-animated-bg"></div>
      <Box
        className="signup-box"
        sx={{
          width: 360,
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          mt: 4,
          p: 1.5,
          boxShadow: 3,
          borderRadius: 2,
          background: darkMode ? "#1e1e1e" : "#fff",
          color: darkMode ? "#fff" : "#000",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography variant="h5" className="signup-project-title" sx={{ fontSize: "1.25rem" }}>
          <CodeIcon className="project-icon" /> AI Code Reviewer <CodeIcon className="project-icon" />
        </Typography>
        <Typography variant="h6" className="signup-title" sx={{ fontSize: "1rem" }}>
          Sign Up
        </Typography>
        {error && <Typography color="error" sx={{ fontSize: "0.75rem" }}>{error}</Typography>}
        <Box sx={{ width: "100%", padding: 1 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& label": { color: darkMode ? "#bbb" : "#333", fontSize: "0.75rem" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: darkMode ? "#bbb" : "#333" },
                "&:hover fieldset": { borderColor: "#6200ea" },
                "&.Mui-focused fieldset": { borderColor: "#6200ea" },
              },
              input: { color: darkMode ? "#fff" : "#000", fontSize: "0.75rem" },
              mb: 0.5,
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& label": { color: darkMode ? "#bbb" : "#333", fontSize: "0.75rem" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: darkMode ? "#bbb" : "#333" },
                "&:hover fieldset": { borderColor: "#6200ea" },
                "&.Mui-focused fieldset": { borderColor: "#6200ea" },
              },
              input: { color: darkMode ? "#fff" : "#000", fontSize: "0.75rem" },
              mb: 0.5,
            }}
          />
          <Grid container spacing={0.5}>
            {passwordCriteria.map((criteria, index) => (
              <Grid item xs={6} key={index}>
                <Typography variant="body2" sx={{ display: "flex", alignItems: "center", fontSize: "0.75rem" }}>
                  {criteria.test(password) ? <CheckCircleIcon color="success" fontSize="small" /> : <RadioButtonUncheckedIcon color="disabled" fontSize="small" />}
                  &nbsp; {criteria.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <FormControlLabel
            control={<Checkbox checked={agree} onChange={() => setAgree(!agree)} />}
            label="I agree to the Terms & Conditions"
            sx={{ mt: 0.5, fontSize: "0.75rem" }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSignup} sx={{ fontSize: "0.75rem" }}>
            Sign Up
          </Button>
        </Box>
        <Divider sx={{ my: 0.5, width: "80%", fontSize: "0.75rem" }}>OR</Divider>
        <Button
          variant="outlined"
          color="inherit"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => handleOAuthSignup(googleProvider)}
          sx={{ 
            mb: 0.5, 
            fontSize: "0.75rem",
            borderColor: darkMode ? "#bbb" : "#333",
            color: darkMode ? "#fff" : "#000",
            "&:hover": {
              borderColor: "#6200ea",
              color: "#6200ea",
            },
          }}
          className="signup-animated-btn"
        >
          Sign Up with Google
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          fullWidth
          startIcon={<GitHubIcon />}
          onClick={() => handleOAuthSignup(githubProvider)}
          sx={{ 
            fontSize: "0.75rem",
            borderColor: darkMode ? "#bbb" : "#333",
            color: darkMode ? "#fff" : "#000",
            "&:hover": {
              borderColor: "#6200ea",
              color: "#6200ea",
            },
          }}
          className="signup-animated-btn"
        >
          Sign Up with GitHub
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 0.5, fontSize: "0.75rem" }}>
          Already have an account?{" "}
          <Button color="primary" onClick={() => navigate("/login")} style={{ textTransform: "none", fontSize: "0.75rem" }}>
            Login
          </Button>
        </Typography>
      </Box>
    </div>
  );
};

export default Signup;