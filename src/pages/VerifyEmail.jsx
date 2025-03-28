import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig"; // Import auth from your Firebase config
import { sendEmailVerification } from "firebase/auth"; // Import sendEmailVerification
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [timer, setTimer] = useState(0); // Timer in seconds
  const [isResending, setIsResending] = useState(false); // To prevent multiple clicks

  // Function to start the timer
  const startTimer = () => {
    setTimer(45); // Reset timer to 45 seconds
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval); // Stop the timer when it reaches 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second
  };

  // Function to resend the verification email
  const handleResendVerification = async () => {
    if (timer > 0) return; // Prevent resending if the timer is still running

    setIsResending(true); // Disable the button to prevent multiple clicks
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user); // Resend verification email
        startTimer(); // Restart the timer
        alert("Verification email resent! Please check your inbox.");
      }
    } catch (err) {
      alert("Failed to resend verification email. Please try again.");
      console.error("Resend error: ", err);
    } finally {
      setIsResending(false); // Re-enable the button
    }
  };

  // Check email verification status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await user.reload(); // Reload user to get the latest email verification status
        if (user.emailVerified) {
          setIsEmailVerified(true);
          navigate("/dashboard"); // Redirect to dashboard if email is verified
        }
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [navigate]);

  // Handle reload to check verification status
  const handleReload = async () => {
    const user = auth.currentUser;
    if (user) {
      await user.reload(); // Reload user to get the latest email verification status
      if (user.emailVerified) {
        setIsEmailVerified(true);
        navigate("/dashboard"); // Redirect after verification
      } else {
        alert("Email is not yet verified. Please check your inbox.");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Verify Your Email
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        A verification email has been sent to your inbox. Please check your email and click the link to verify your account.
      </Typography>
      <Button variant="contained" onClick={handleReload} sx={{ mb: 2 }}>
        I've Verified My Email
      </Button>
      <Button
        variant="outlined"
        onClick={handleResendVerification}
        disabled={timer > 0 || isResending} // Disable button if timer is running or resending
      >
        {timer > 0 ? `Resend in ${timer}s` : "Resend Verification Email"}
      </Button>
    </Box>
  );
};

export default VerifyEmail;