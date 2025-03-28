// import { useTheme } from "../context/ThemeContext";
// import { IconButton } from "@mui/material";
// import { Brightness4, Brightness7 } from "@mui/icons-material";

// const ThemeToggle = () => {
//   const { darkMode, toggleTheme } = useTheme();

//   return (
//     <IconButton onClick={toggleTheme} color="inherit">
//       {darkMode ? <Brightness7 /> : <Brightness4 />}
//     </IconButton>
//   );
// };

// export default ThemeToggle;

import { useTheme } from "../context/ThemeContext";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;