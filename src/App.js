import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // ✅ Import AuthContext
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./dashboard/Dashboard";
import About from "./pages/About";
import Features from "./pages/Features/Features";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import History from "./pages/History";
import VerifyEmail from "./pages/VerifyEmail";
import BugDetection from "./pages/Features/BugDetection";
import CodeAnalysis from "./pages/Features/CodeAnalysis";
import CodeReview from "./pages/Features/CodeReview";
import SecurityCheck from "./pages/Features/SecurityCheck";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import { auth } from "./firebase/firebase"; // ✅ Firebase Import

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);


  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />  
        <Route path="/history" element={user ? <History /> : <Navigate to="/login" />} />
        <Route path="/bug-detection" element={<BugDetection />} />
        <Route path="/code-analysis" element={<CodeAnalysis />} />
        <Route path="/code-review" element={<CodeReview />} />
        <Route path="/security-check" element={<SecurityCheck />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login " />} />
      </Routes>
    </Router>
  );
}

export default App;
