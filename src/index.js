import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext"; // ✅ Import AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProviderWrapper>
    <AuthProvider> {/* ✅ Wrap kiya AuthProvider se */}
      <App />
    </AuthProvider>
  </ThemeProviderWrapper>
);
