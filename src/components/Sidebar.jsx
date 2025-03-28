

// // import React, { useState, useEffect } from "react";
// // import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Divider, Button, Typography } from "@mui/material";
// // import { Link, useNavigate } from "react-router-dom";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import HomeIcon from "@mui/icons-material/Home";
// // import InfoIcon from "@mui/icons-material/Info";
// // import ContactMailIcon from "@mui/icons-material/ContactMail";
// // import LoginIcon from "@mui/icons-material/Login";
// // import PersonAddIcon from "@mui/icons-material/PersonAdd";
// // import LogoutIcon from "@mui/icons-material/Logout";
// // import HistoryIcon from "@mui/icons-material/History";
// // import { Fade } from "@mui/material"; // Animation
// // import { auth } from "../firebaseConfig"; // Import Firebase Auth
// // import { onAuthStateChanged, signOut } from "firebase/auth";

// // const Sidebar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [currentTipIndex, setCurrentTipIndex] = useState(0);
// //   const [fade, setFade] = useState(true);
// //   const navigate = useNavigate();

// //   // 🔹 Firebase Auth State Listener
// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setIsLoggedIn(!!user);
// //     });
// //     return () => unsubscribe();
// //   }, []);

// //   // 🔹 Coding Tips Array (Auto-Changing)
// //   const codingTips = [
// //     "Always write clean & readable code.",
// //     "Use meaningful variable names.",
// //     "Comment your code but don't overdo it!",
// //     "Optimize loops for better performance.",
// //     "Debugging is an art, practice it!",
// //     "Write tests before writing the actual code.",
// //     "Refactor your code for better efficiency.",
// //     "Use version control like Git for teamwork."
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setFade(false);
// //       setTimeout(() => {
// //         setCurrentTipIndex((prevIndex) => (prevIndex + 1) % codingTips.length);
// //         setFade(true);
// //       }, 500);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   // 🔹 Logout Handler
// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       alert("Logged out successfully! ✅");
// //       navigate("/");
// //     } catch (error) {
// //       console.error("Logout Error:", error.message);
// //     }
// //   };

// //   return (
// //     <Drawer
// //       variant="permanent"
// //       anchor="left"
// //       sx={{
// //         width: open ? 200 : 60,
// //         flexShrink: 0,
// //         transition: "width 0.3s ease-in-out",
// //         "& .MuiDrawer-paper": {
// //           width: open ? 200 : 60,
// //           background: "#1e1e1e",
// //           color: "#fff",
// //           transition: "width 0.3s ease-in-out",
// //           overflowX: "hidden",
// //           display: "flex",
// //           flexDirection: "column",
// //           justifyContent: "space-between",
// //         },
// //       }}
// //     >
// //       {/* Expand/Collapse Button */}
// //       <Box sx={{ display: "flex", justifyContent: open ? "flex-end" : "center", p: 1 }}>
// //         <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
// //           <MenuIcon />
// //         </IconButton>
// //       </Box>

// //       {/* Sidebar Items with Hover Effect */}
// //       <List sx={{ flexGrow: 1 }}>
// //         {[
// //           { text: "Home", icon: <HomeIcon />, link: "/" },
// //           { text: "About", icon: <InfoIcon />, link: "/about" },
// //           { text: "Contact", icon: <ContactMailIcon />, link: "/contact" },
// //         ].map((item, index) => (
// //           <ListItem
// //             button
// //             key={index}
// //             component={Link}
// //             to={item.link}
// //             sx={{
// //               display: "flex",
// //               justifyContent: open ? "flex-start" : "center",
// //               alignItems: "center",
// //               padding: "12px 16px",
// //               transition: "all 0.3s ease",
// //               "&:hover": {
// //                 background: "#333",
// //                 transform: "scale(1.05)",
// //               },
// //             }}
// //           >
// //             <ListItemIcon
// //               sx={{
// //                 minWidth: "40px",
// //                 color: "#fff",
// //                 transition: "all 0.3s ease",
// //                 "&:hover": {
// //                   color: "#00bcd4",
// //                   transform: "scale(1.2)",
// //                 },
// //               }}
// //             >
// //               {item.icon}
// //             </ListItemIcon>

// //             {open && (
// //               <ListItemText
// //                 primary={item.text}
// //                 primaryTypographyProps={{
// //                   sx: {
// //                     color: "#fff",
// //                     transition: "all 0.3s ease",
// //                     "&:hover": {
// //                       color: "#00bcd4",
// //                     },
// //                   },
// //                 }}
// //               />
// //             )}
// //           </ListItem>
// //         ))}
// //       </List>

// //       <Divider sx={{ background: "#444" }} />

// //       {/* Motivational Text */}
// //       {open && (
// //         <Box sx={{ textAlign: "center", p: 2, whiteSpace: "pre-line", fontSize: "14px" }}>
// //           {"Write better code,\nfix bugs faster!"}
// //         </Box>
// //       )}

// //       <Divider sx={{ background: "#444" }} />

// //       {/* Auto-Changing Coding Tips */}
// //       {open && (
// //         <Box sx={{ textAlign: "center", p: 2, fontSize: "12px", color: "#ddd", whiteSpace: "pre-line", minHeight: "50px" }}>
// //           <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>💡 Coding Tip:</Typography>
// //           <Fade in={fade} timeout={500}>
// //             <Typography variant="body2">{codingTips[currentTipIndex]}</Typography>
// //           </Fade>
// //         </Box>
// //       )}

// //       <Divider sx={{ background: "#444" }} />

// //       {/* Bottom Section (Login/Signup OR Logout + History) */}
// //       <Box sx={{ p: 2 }}>
// //         {!isLoggedIn ? (
// //           <>
// //             <Button
// //               component={Link}
// //               to="/login"
// //               variant="contained"
// //               color="primary"
// //               startIcon={<LoginIcon />}
// //               sx={{ width: open ? "100%" : "auto", mb: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
// //             >
// //               {open ? "Login" : ""}
// //             </Button>
// //             <Button
// //               component={Link}
// //               to="/signup"
// //               variant="outlined"
// //               color="primary"
// //               startIcon={<PersonAddIcon />}
// //               sx={{ width: open ? "100%" : "auto", display: "flex", justifyContent: "center", alignItems: "center" }}
// //             >
// //               {open ? "Signup" : ""}
// //             </Button>
// //           </>
// //         ) : (
// //           <>
// //             <Button
// //               component={Link}
// //               to="/history"
// //               variant="outlined"
// //               color="secondary"
// //               startIcon={<HistoryIcon />}
// //               sx={{ width: open ? "100%" : "auto", mb: 1, display: "flex", justifyContent: "center", alignItems: "center" }}
// //             >
// //               {open ? "History" : ""}
// //             </Button>
// //             <Button
// //               variant="contained"
// //               color="error"
// //               startIcon={<LogoutIcon />}
// //               sx={{ width: open ? "100%" : "auto", display: "flex", justifyContent: "center", alignItems: "center" }}
// //               onClick={handleLogout}
// //             >
// //               {open ? "Logout" : ""}
// //             </Button>
// //           </>
// //         )}
// //       </Box>
// //     </Drawer>
// //   );
// // };

// // export default Sidebar;

// import React, { useState, useEffect } from "react";
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Divider, Button, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import LoginIcon from "@mui/icons-material/Login";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import LogoutIcon from "@mui/icons-material/Logout";
// import HistoryIcon from "@mui/icons-material/History";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// // import BugReportIcon from "@mui/icons-material/BugReport";
// import { Fade } from "@mui/material";
// import { auth } from "../firebase/firebaseConfig";
// import { onAuthStateChanged, signOut } from "firebase/auth";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentTipIndex, setCurrentTipIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsLoggedIn(!!user);
//     });
//     return () => unsubscribe();
//   }, []);

//   const codingTips = [
//     "Always write clean & readable code.",
//     "Use meaningful variable names.",
//     "Comment your code but don't overdo it!",
//     "Optimize loops for better performance.",
//     "Debugging is an art, practice it!",
//     "Write tests before writing the actual code.",
//     "Refactor your code for better efficiency.",
//     "Use version control like Git for teamwork."
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         setCurrentTipIndex((prevIndex) => (prevIndex + 1) % codingTips.length);
//         setFade(true);
//       }, 500);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [codingTips.length]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert("Logged out successfully! ✅");
//       navigate("/");
//     } catch (error) {
//       console.error("Logout Error:", error.message);
//     }
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       sx={{
//         width: open ? 200 : 60,
//         flexShrink: 0,
//         transition: "width 0.3s ease-in-out",
//         "& .MuiDrawer-paper": {
//           width: open ? 200 : 60,
//           background: "#1e1e1e",
//           color: "#fff",
//           transition: "width 0.3s ease-in-out",
//           overflowX: "hidden",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         },
//       }}
//     >
//       {/* Expand/Collapse Button */}
//       <Box sx={{ display: "flex", justifyContent: open ? "flex-end" : "center", p: 1 }}>
//         <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
//           <MenuIcon />
//         </IconButton>
//       </Box>

//       {/* Sidebar Items */}
//       <List sx={{ flexGrow: 1 }}>
//         {[
//           { text: "Home", icon: <HomeIcon />, link: "/" },
//           { text: "About", icon: <InfoIcon />, link: "/about" },
//           { text: "Contact", icon: <ContactMailIcon />, link: "/contact" },
//         ].map((item, index) => (
//           <ListItem
//             button
//             key={index}
//             component={Link}
//             to={item.link}
//             sx={{
//               display: "flex",
//               justifyContent: open ? "flex-start" : "center",
//               alignItems: "center",
//               padding: "12px 16px",
//               transition: "all 0.3s ease",
//               "&:hover": {
//                 background: "#333",
//                 transform: "scale(1.05)",
//               },
//             }}
//           >
//             <ListItemIcon
//               sx={{
//                 minWidth: "40px",
//                 color: "#fff",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   color: "#00bcd4",
//                   transform: "scale(1.2)",
//                 },
//               }}
//             >
//               {item.icon}
//             </ListItemIcon>

//             {open && (
//               <ListItemText
//                 primary={item.text}
//                 primaryTypographyProps={{
//                   sx: {
//                     color: "#fff",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       color: "#00bcd4",
//                     },
//                   },
//                 }}
//               />
//             )}
//           </ListItem>
//         ))}

//         {/* Extra options after login */}
//         {isLoggedIn && (
//           <>
//             <Divider sx={{ background: "#444", my: 1 }} />

//             {[
//               { text: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
//               { text: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
//               // { text: "Code Review", icon: <BugReportIcon />, link: "/code-review" },
//               { text: "History", icon: <HistoryIcon />, link: "/history" },
//             ].map((item, index) => (
//               <ListItem
//                 button
//                 key={index}
//                 component={Link}
//                 to={item.link}
//                 sx={{
//                   display: "flex",
//                   justifyContent: open ? "flex-start" : "center",
//                   alignItems: "center",
//                   padding: "12px 16px",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     background: "#333",
//                     transform: "scale(1.05)",
//                   },
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: "40px",
//                     color: "#fff",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       color: "#00bcd4",
//                       transform: "scale(1.2)",
//                     },
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>

//                 {open && (
//                   <ListItemText
//                     primary={item.text}
//                     primaryTypographyProps={{
//                       sx: {
//                         color: "#fff",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           color: "#00bcd4",
//                         },
//                       },
//                     }}
//                   />
//                 )}
//               </ListItem>
//             ))}
//           </>
//         )}
//       </List>

//       <Divider sx={{ background: "#444" }} />

//       {/* Coding Tip */}
//       {open && (
//         <Box sx={{ textAlign: "center", p: 2, fontSize: "12px", color: "#ddd", whiteSpace: "pre-line", minHeight: "50px" }}>
//           <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>💡 Coding Tip:</Typography>
//           <Fade in={fade} timeout={500}>
//             <Typography variant="body2">{codingTips[currentTipIndex]}</Typography>
//           </Fade>
//         </Box>
//       )}

//       <Divider sx={{ background: "#444" }} />

//       {/* Bottom Section */}
//       <Box sx={{ p: 2 }}>
//         {!isLoggedIn ? (
//           <>
//             <Button component={Link} to="/login" variant="contained" color="primary" startIcon={<LoginIcon />} sx={{ width: open ? "100%" : "auto", mb: 1 }}>
//               {open ? "Login" : ""}
//             </Button>
//             <Button component={Link} to="/signup" variant="outlined" color="primary" startIcon={<PersonAddIcon />} sx={{ width: open ? "100%" : "auto" }}>
//               {open ? "Signup" : ""}
//             </Button>
//           </>
//         ) : (
//           <Button variant="contained" color="error" startIcon={<LogoutIcon />} sx={{ width: open ? "100%" : "auto" }} onClick={handleLogout}>
//             {open ? "Logout" : ""}
//           </Button>
//         )}
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;


import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Divider, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import HistoryIcon from "@mui/icons-material/History";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Fade } from "@mui/material";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

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

  const codingTips = [
    "Always write clean & readable code.",
    "Use meaningful variable names.",
    "Comment your code but don't overdo it!",
    "Optimize loops for better performance.",
    "Debugging is an art, practice it!",
    "Write tests before writing the actual code.",
    "Refactor your code for better efficiency.",
    "Use version control like Git for teamwork."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % codingTips.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [codingTips.length]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully! ✅");
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: open ? 200 : 60,
        flexShrink: 0,
        transition: "width 0.3s ease-in-out",
        "& .MuiDrawer-paper": {
          width: open ? 200 : 60,
          background: "#1e1e1e",
          color: "#fff",
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      {/* Expand/Collapse Button */}
      <Box sx={{ display: "flex", justifyContent: open ? "flex-end" : "center", p: 1 }}>
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Sidebar Items */}
      <List sx={{ flexGrow: 1 }}>
        {[
          { text: "Home", icon: <HomeIcon />, link: "/" },
          { text: "About", icon: <InfoIcon />, link: "/about" },
          { text: "Contact", icon: <ContactMailIcon />, link: "/contact" },
        ].map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.link}
            sx={{
              display: "flex",
              justifyContent: open ? "flex-start" : "center",
              alignItems: "center",
              padding: "12px 16px",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#333",
                transform: "scale(1.05)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "40px",
                color: "#fff",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#00bcd4",
                  transform: "scale(1.2)",
                },
              }}
            >
              {item.icon}
            </ListItemIcon>

            {open && (
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#00bcd4",
                    },
                  },
                }}
              />
            )}
          </ListItem>
        ))}

        {/* Extra options after login and email verification */}
        {isLoggedIn && isEmailVerified && (
          <>
            <Divider sx={{ background: "#444", my: 1 }} />

            {[
              { text: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
              { text: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
              { text: "History", icon: <HistoryIcon />, link: "/history" },
            ].map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={item.link}
                sx={{
                  display: "flex",
                  justifyContent: open ? "flex-start" : "center",
                  alignItems: "center",
                  padding: "12px 16px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#333",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "40px",
                    color: "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#00bcd4",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                {open && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: {
                        color: "#fff",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          color: "#00bcd4",
                        },
                      },
                    }}
                  />
                )}
              </ListItem>
            ))}
          </>
        )}
      </List>

      <Divider sx={{ background: "#444" }} />

      {/* Coding Tip */}
      {open && (
        <Box sx={{ textAlign: "center", p: 2, fontSize: "12px", color: "#ddd", whiteSpace: "pre-line", minHeight: "50px" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>💡 Coding Tip:</Typography>
          <Fade in={fade} timeout={500}>
            <Typography variant="body2">{codingTips[currentTipIndex]}</Typography>
          </Fade>
        </Box>
      )}

      <Divider sx={{ background: "#444" }} />

      {/* Bottom Section */}
      <Box sx={{ p: 2 }}>
        {!isLoggedIn || !isEmailVerified ? (
          <>
            <Button component={Link} to="/login" variant="contained" color="primary" startIcon={<LoginIcon />} sx={{ width: open ? "100%" : "auto", mb: 1 }}>
              {open ? "Login" : ""}
            </Button>
            <Button component={Link} to="/signup" variant="outlined" color="primary" startIcon={<PersonAddIcon />} sx={{ width: open ? "100%" : "auto" }}>
              {open ? "Signup" : ""}
            </Button>
          </>
        ) : (
          <Button variant="contained" color="error" startIcon={<LogoutIcon />} sx={{ width: open ? "100%" : "auto" }} onClick={handleLogout}>
            {open ? "Logout" : ""}
          </Button>
        )}
      </Box>
    </Drawer>
  );
};

export default Sidebar;