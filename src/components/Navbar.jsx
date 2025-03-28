
// // // // import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { useState, useEffect } from "react";
// // // // import ThemeToggle from "./ThemeToggle";
// // // // import Sidebar from "./Sidebar";
// // // // import { auth } from "../firebase/firebaseConfig"; // ✅ Firebase Auth Import
// // // // import { signOut, onAuthStateChanged } from "firebase/auth"; // ✅ Auth Functions

// // // // const Navbar = () => {
// // // //   const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔹 Tracks Login State
// // // //   const navigate = useNavigate();

// // // //   // ✅ Check Authentication State (Firebase)
// // // //   useEffect(() => {
// // // //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// // // //       setIsLoggedIn(!!user);
// // // //     });
// // // //     return () => unsubscribe();
// // // //   }, []);

// // // //   // ✅ Logout Function (Firebase)
// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await signOut(auth);
// // // //       alert("Logout Successful ✅");
// // // //       navigate("/login"); // ✅ Redirect to login page
// // // //     } catch (error) {
// // // //       console.error("Logout Error:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <AppBar position="static">
// // // //       <Toolbar>
// // // //         {/* Sidebar Button */}
// // // //         <Sidebar />

// // // //         {/* Logo/Home Link (Updated) */}
// // // //         <Link to="/" style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
// // // //           <Typography variant="h6" fontWeight="bold">
// // // //             AI Code Reviewer
// // // //           </Typography>
// // // //         </Link>

// // // //         {/* Navigation Links with Hover Effect */}
// // // //         {["features", "about", "contact"].map((text, index) => (
// // // //           <Button
// // // //             key={index}
// // // //             color="inherit"
// // // //             component={Link}
// // // //             to={`/${text}`} // ✅ Fix: Ensuring Correct Routing
// // // //             sx={{
// // // //               transition: "0.3s ease-in-out",
// // // //               "&:hover": {
// // // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // // //                 transform: "scale(1.1)",
// // // //                 color: "#FFD700", // 🟡 Gold Color on Hover
// // // //               },
// // // //             }}
// // // //           >
// // // //             {text.charAt(0).toUpperCase() + text.slice(1)} {/* Capitalizing First Letter */}
// // // //           </Button>
// // // //         ))}

// // // //         {/* History (Show only when logged in) */}
// // // //         {isLoggedIn && (
// // // //           <Button
// // // //             color="inherit"
// // // //             component={Link}
// // // //             to="/history"
// // // //             sx={{
// // // //               transition: "0.3s ease-in-out",
// // // //               "&:hover": {
// // // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // // //                 transform: "scale(1.1)",
// // // //                 color: "#FFD700", // 🟡 Gold Color on Hover
// // // //               },
// // // //             }}
// // // //           >
// // // //             History
// // // //           </Button>
// // // //         )}

// // // //         {/* Login/Signup or Logout with Hover Effect */}
// // // //         {!isLoggedIn ? (
// // // //           <>
// // // //             <Button
// // // //               color="inherit"
// // // //               component={Link}
// // // //               to="/login"
// // // //               sx={{
// // // //                 transition: "0.3s ease-in-out",
// // // //                 "&:hover": {
// // // //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// // // //                   transform: "scale(1.1)",
// // // //                   color: "#FFD700",
// // // //                 },
// // // //               }}
// // // //             >
// // // //               Login
// // // //             </Button>
// // // //             <Button
// // // //               color="inherit"
// // // //               component={Link}
// // // //               to="/signup"
// // // //               sx={{
// // // //                 transition: "0.3s ease-in-out",
// // // //                 "&:hover": {
// // // //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// // // //                   transform: "scale(1.1)",
// // // //                   color: "#FFD700",
// // // //                 },
// // // //               }}
// // // //             >
// // // //               Signup
// // // //             </Button>
// // // //           </>
// // // //         ) : (
// // // //           <Button
// // // //             color="inherit"
// // // //             onClick={handleLogout}
// // // //             sx={{
// // // //               transition: "0.3s ease-in-out",
// // // //               "&:hover": {
// // // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // // //                 transform: "scale(1.1)",
// // // //                 color: "#FF6347", // 🔴 Tomato Red on Hover
// // // //               },
// // // //             }}
// // // //           >
// // // //             Logout
// // // //           </Button>
// // // //         )}

// // // //         {/* Theme Toggle */}
// // // //         <ThemeToggle />
// // // //       </Toolbar>
// // // //     </AppBar>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { useState, useEffect } from "react";
// // // import ThemeToggle from "./ThemeToggle";
// // // import Sidebar from "./Sidebar";
// // // import { auth } from "../firebase/firebaseConfig";
// // // import { signOut, onAuthStateChanged } from "firebase/auth";

// // // const Navbar = () => {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
// // //   const [isEmailVerified, setIsEmailVerified] = useState(false); // Tracks email verification state
// // //   const navigate = useNavigate();

// // //   // Check authentication and email verification state
// // //   useEffect(() => {
// // //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// // //       if (user) {
// // //         await user.reload(); // Reload user to get the latest email verification status
// // //         setIsLoggedIn(true);
// // //         setIsEmailVerified(user.emailVerified); // Check if email is verified
// // //       } else {
// // //         setIsLoggedIn(false);
// // //         setIsEmailVerified(false);
// // //       }
// // //     });
// // //     return () => unsubscribe();
// // //   }, []);

// // //   // Logout function
// // //   const handleLogout = async () => {
// // //     try {
// // //       await signOut(auth);
// // //       alert("Logout Successful ✅");
// // //       navigate("/login");
// // //     } catch (error) {
// // //       console.error("Logout Error:", error);
// // //     }
// // //   };

// // //   return (
// // //     <AppBar position="static">
// // //       <Toolbar>
// // //         {/* Sidebar Button */}
// // //         <Sidebar />

// // //         {/* Logo/Home Link */}
// // //         <Link to="/" style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
// // //           <Typography variant="h6" fontWeight="bold">
// // //             AI Code Reviewer
// // //           </Typography>
// // //         </Link>

// // //         {/* Navigation Links */}
// // //         {["features", "about", "contact"].map((text, index) => (
// // //           <Button
// // //             key={index}
// // //             color="inherit"
// // //             component={Link}
// // //             to={`/${text}`}
// // //             sx={{
// // //               transition: "0.3s ease-in-out",
// // //               "&:hover": {
// // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                 transform: "scale(1.1)",
// // //                 color: "#FFD700",
// // //               },
// // //             }}
// // //           >
// // //             {text.charAt(0).toUpperCase() + text.slice(1)}
// // //           </Button>
// // //         ))}

// // //         {/* History (Show only when logged in and email is verified) */}
// // //         {isLoggedIn && isEmailVerified && (
// // //           <Button
// // //             color="inherit"
// // //             component={Link}
// // //             to="/history"
// // //             sx={{
// // //               transition: "0.3s ease-in-out",
// // //               "&:hover": {
// // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                 transform: "scale(1.1)",
// // //                 color: "#FFD700",
// // //               },
// // //             }}
// // //           >
// // //             History
// // //           </Button>
// // //         )}

// // //         {/* Login/Signup or Logout */}
// // //         {!isLoggedIn || !isEmailVerified ? (
// // //           <>
// // //             <Button
// // //               color="inherit"
// // //               component={Link}
// // //               to="/login"
// // //               sx={{
// // //                 transition: "0.3s ease-in-out",
// // //                 "&:hover": {
// // //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                   transform: "scale(1.1)",
// // //                   color: "#FFD700",
// // //                 },
// // //               }}
// // //             >
// // //               Login
// // //             </Button>
// // //             <Button
// // //               color="inherit"
// // //               component={Link}
// // //               to="/signup"
// // //               sx={{
// // //                 transition: "0.3s ease-in-out",
// // //                 "&:hover": {
// // //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                   transform: "scale(1.1)",
// // //                   color: "#FFD700",
// // //                 },
// // //               }}
// // //             >
// // //               Signup
// // //             </Button>
// // //           </>
// // //         ) : (
// // //           <Button
// // //             color="inherit"
// // //             onClick={handleLogout}
// // //             sx={{
// // //               transition: "0.3s ease-in-out",
// // //               "&:hover": {
// // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                 transform: "scale(1.1)",
// // //                 color: "#FF6347",
// // //               },
// // //             }}
// // //           >
// // //             Logout
// // //           </Button>
// // //         )}

// // //         {/* Theme Toggle */}
// // //         <ThemeToggle />
// // //       </Toolbar>
// // //     </AppBar>
// // //   );
// // // };

// // // export default Navbar;


// // import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import ThemeToggle from "./ThemeToggle";
// // import Sidebar from "./Sidebar";
// // import { auth } from "../firebase/firebaseConfig";
// // import { signOut, onAuthStateChanged } from "firebase/auth";

// // const Navbar = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
// //   const [isEmailVerified, setIsEmailVerified] = useState(false); // Tracks email verification state
// //   const navigate = useNavigate();

// //   // Check authentication and email verification state
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       if (user) {
// //         await user.reload(); // Reload user to get the latest email verification status
// //         setIsLoggedIn(true);
// //         setIsEmailVerified(user.emailVerified); // Check if email is verified
// //       } else {
// //         setIsLoggedIn(false);
// //         setIsEmailVerified(false);
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // Logout function
// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       alert("Logout Successful ✅");
// //       navigate("/login");
// //     } catch (error) {
// //       console.error("Logout Error:", error);
// //     }
// //   };

// //   return (
// //     <AppBar position="static">
// //       <Toolbar>
// //         {/* Sidebar Button */}
// //         <Sidebar />

// //         {/* Logo/Home Link */}
// //         <Link to="/" style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
// //           <Typography variant="h6" fontWeight="bold">
// //             AI Code Reviewer
// //           </Typography>
// //         </Link>

// //         {/* Navigation Links */}
// //         {["features", "about", "contact"].map((text, index) => (
// //           <Button
// //             key={index}
// //             color="inherit"
// //             component={Link}
// //             to={`/${text}`}
// //             sx={{
// //               transition: "0.3s ease-in-out",
// //               "&:hover": {
// //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                 transform: "scale(1.1)",
// //                 color: "#FFD700",
// //               },
// //             }}
// //           >
// //             {text.charAt(0).toUpperCase() + text.slice(1)}
// //           </Button>
// //         ))}

// //         {/* History (Show only when logged in and email is verified) */}
// //         {isLoggedIn && isEmailVerified && (
// //           <Button
// //             color="inherit"
// //             component={Link}
// //             to="/history"
// //             sx={{
// //               transition: "0.3s ease-in-out",
// //               "&:hover": {
// //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                 transform: "scale(1.1)",
// //                 color: "#FFD700",
// //               },
// //             }}
// //           >
// //             History
// //           </Button>
// //         )}

// //         {/* Login/Signup or Logout */}
// //         {!isLoggedIn || !isEmailVerified ? (
// //           <>
// //             <Button
// //               color="inherit"
// //               component={Link}
// //               to="/login"
// //               sx={{
// //                 transition: "0.3s ease-in-out",
// //                 "&:hover": {
// //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                   transform: "scale(1.1)",
// //                   color: "#FFD700",
// //                 },
// //               }}
// //             >
// //               Login
// //             </Button>
// //             <Button
// //               color="inherit"
// //               component={Link}
// //               to="/signup"
// //               sx={{
// //                 transition: "0.3s ease-in-out",
// //                 "&:hover": {
// //                   backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                   transform: "scale(1.1)",
// //                   color: "#FFD700",
// //                 },
// //               }}
// //             >
// //               Signup
// //             </Button>
// //           </>
// //         ) : (
// //           <Button
// //             color="inherit"
// //             onClick={handleLogout}
// //             sx={{
// //               transition: "0.3s ease-in-out",
// //               "&:hover": {
// //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                 transform: "scale(1.1)",
// //                 color: "#FF6347",
// //               },
// //             }}
// //           >
// //             Logout
// //           </Button>
// //         )}

// //         {/* Theme Toggle */}
// //         <ThemeToggle />
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;

// import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import ThemeToggle from "./ThemeToggle";
// import Sidebar from "./Sidebar";
// import { auth } from "../firebase/firebaseConfig";
// import { signOut, onAuthStateChanged } from "firebase/auth";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
//   const [isEmailVerified, setIsEmailVerified] = useState(false); // Tracks email verification state
//   const navigate = useNavigate();
//   const theme = useTheme(); // Access the current theme

//   // Check authentication and email verification state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         await user.reload(); // Reload user to get the latest email verification status
//         setIsLoggedIn(true);
//         setIsEmailVerified(user.emailVerified); // Check if email is verified
//       } else {
//         setIsLoggedIn(false);
//         setIsEmailVerified(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert("Logout Successful ✅");
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff", // Set background color based on theme
//         color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", // Set text color based on theme
//         boxShadow: "none", // Optional: Remove shadow for a cleaner look
//       }}
//     >
//       <Toolbar>
//         {/* Sidebar Button */}
//         <Sidebar />

//         {/* Logo/Home Link */}
//         <Link to="/" style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
//           <Typography variant="h6" fontWeight="bold">
//             AI Code Reviewer
//           </Typography>
//         </Link>

//         {/* Navigation Links */}
//         {["features", "about", "contact"].map((text, index) => (
//           <Button
//             key={index}
//             color="inherit"
//             component={Link}
//             to={`/${text}`}
//             sx={{
//               transition: "0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
//                 transform: "scale(1.1)",
//                 color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
//               },
//             }}
//           >
//             {text.charAt(0).toUpperCase() + text.slice(1)}
//           </Button>
//         ))}

//         {/* History (Show only when logged in and email is verified) */}
//         {isLoggedIn && isEmailVerified && (
//           <Button
//             color="inherit"
//             component={Link}
//             to="/history"
//             sx={{
//               transition: "0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
//                 transform: "scale(1.1)",
//                 color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
//               },
//             }}
//           >
//             History
//           </Button>
//         )}

//         {/* Login/Signup or Logout */}
//         {!isLoggedIn || !isEmailVerified ? (
//           <>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/login"
//               sx={{
//                 transition: "0.3s ease-in-out",
//                 "&:hover": {
//                   backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
//                   transform: "scale(1.1)",
//                   color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
//                 },
//               }}
//             >
//               Login
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/signup"
//               sx={{
//                 transition: "0.3s ease-in-out",
//                 "&:hover": {
//                   backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
//                   transform: "scale(1.1)",
//                   color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
//                 },
//               }}
//             >
//               Signup
//             </Button>
//           </>
//         ) : (
//           <Button
//             color="inherit"
//             onClick={handleLogout}
//             sx={{
//               transition: "0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
//                 transform: "scale(1.1)",
//                 color: theme.palette.mode === "dark" ? "#FF6347" : "#d32f2f", // Hover text color based on theme
//               },
//             }}
//           >
//             Logout
//           </Button>
//         )}

//         {/* Theme Toggle */}
//         <ThemeToggle />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import { AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Sidebar from "./Sidebar";
import { auth } from "../firebase/firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [isEmailVerified, setIsEmailVerified] = useState(false); // Tracks email verification state
  const navigate = useNavigate();
  const theme = useTheme(); // Access the current theme

  // Check authentication and email verification state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload(); // Reload user to get the latest email verification status
        setIsLoggedIn(true);
        setIsEmailVerified(user.emailVerified); // Check if email is verified
      } else {
        setIsLoggedIn(false);
        setIsEmailVerified(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout Successful ✅");
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff", // Set background color based on theme
        color: theme.palette.mode === "dark" ? "#ffffff" : "#000000", // Set text color based on theme
        boxShadow: "none", // Optional: Remove shadow for a cleaner look
        borderBottom: theme.palette.mode === "dark" ? "1px solid #444" : "1px solid #e0e0e0", // Bottom border based on theme
      }}
    >
      <Toolbar>
        {/* Sidebar Button */}
        <Sidebar />

        {/* Logo/Home Link */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit", flexGrow: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            AI Code Reviewer
          </Typography>
        </Link>

        {/* Navigation Links */}
        {["features", "about", "contact"].map((text, index) => (
          <Button
            key={index}
            color="inherit"
            component={Link}
            to={`/${text}`}
            sx={{
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
                transform: "scale(1.1)",
                color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
              },
            }}
          >
            {text.charAt(0).toUpperCase() + text.slice(1)}
          </Button>
        ))}

        {/* History (Show only when logged in and email is verified) */}
        {isLoggedIn && isEmailVerified && (
          <Button
            color="inherit"
            component={Link}
            to="/history"
            sx={{
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
                transform: "scale(1.1)",
                color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
              },
            }}
          >
            History
          </Button>
        )}

        {/* Login/Signup or Logout */}
        {!isLoggedIn || !isEmailVerified ? (
          <>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                transition: "0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
                  transform: "scale(1.1)",
                  color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
                },
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/signup"
              sx={{
                transition: "0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
                  transform: "scale(1.1)",
                  color: theme.palette.mode === "dark" ? "#FFD700" : "#6200ea", // Hover text color based on theme
                },
              }}
            >
              Signup
            </Button>
          </>
        ) : (
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              transition: "0.3s ease-in-out",
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)", // Hover background based on theme
                transform: "scale(1.1)",
                color: theme.palette.mode === "dark" ? "#FF6347" : "#d32f2f", // Hover text color based on theme
              },
            }}
          >
            Logout
          </Button>
        )}

        {/* Theme Toggle */}
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;