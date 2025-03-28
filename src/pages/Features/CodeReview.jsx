import React, { useState } from "react";
import { reviewCode } from "../../api/codeReview";
import { Box, Button, TextField, Typography, Container, Select, MenuItem } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import "../../styles/FeaturePage.css";

const CodeReview = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeReview = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const response = await reviewCode({ code, language });
      console.log("API Response:", response);
      setResult(response);
    } catch (error) {
      console.error("Error in API:", error);
      setResult({ error: "❌ Error analyzing the code." });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result) return;

    const reportContent = `
      🔥 AI Code Review Report 🔥
      --------------------------------
      🛠 Language: ${language}
      ⏱ Execution Time: ${result.execution_time}
      ⭐ Code Quality: ${result.code_quality}
      🔢 Code Complexity: ${result.complexity}
      📖 Readability Score: ${result.readability_score}
      
      🔍 Unused Imports: ${result.unused_imports.join(", ")}
      📌 Best Practices Issues:
      ${result.best_practices.join("\n")}

      💡 AI Suggestions:
      ${result.ai_suggestions.length > 0 ? result.ai_suggestions.join("\n") : "No AI suggestions available."}

      📌 Function Breakdown:
      ${result.function_breakdown.join("\n")}

      💡 User Submitted Code:
      --------------------------------
      ${code}

      --------------------------------
      🚀 "Optimized by AI, Powered by Intelligence." 🚀
    `;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `code_review_${language}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAnalyzeAnother = () => {
    setCode("");
    setResult(null);
  };

  return (
    <>
      <Box className="main-container">
        <Sidebar />
        <Box className="feature-content">
          <Container maxWidth="lg">
            <Typography variant="h3" className="feature-title">
              🔍 AI Code Review
            </Typography>
            <Typography className="feature-subtext">
              Get an in-depth review of your code with AI insights!
            </Typography>

            {/* Language Select Box with proper spacing */}
            <Box className="language-select">
              <Typography variant="h6">Select Language:</Typography>
              <Select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="language-dropdown"
              >
                <MenuItem value="python">Python</MenuItem>
                <MenuItem value="c">C</MenuItem>
                <MenuItem value="cpp">C++</MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="javascript">JavaScript</MenuItem>
              </Select>
            </Box>

            <Box sx={{ height: "20px" }} /> {/* 👈 Spacing Fix */}

            <Box className="split-container">
              {/* Code Input Box */}
              <Box className="code-box animated-border">
                <TextField
                  label="Paste your code here..."
                  multiline
                  rows={10}
                  fullWidth
                  variant="outlined"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={isLoading || !!result}
                />
                <Button 
                  variant="contained" 
                  onClick={handleCodeReview} 
                  disabled={isLoading || !!result}
                  className="review-button"
                >
                  {isLoading ? "Reviewing..." : "Review Code 🚀"}
                </Button>
              </Box>

              {/* Report Box - Fixed Size */}
              <Box className="report-box animated-border">
                {result ? (
                  <div className="scrollable-report">
                    <Typography variant="h5">📜 Review Report:</Typography>
                    <Typography>⏱ Execution Time: {result.execution_time}</Typography>
                    <Typography>⭐ Code Quality: {result.code_quality}</Typography>
                    <Typography>🔢 Code Complexity: {result.complexity}</Typography>
                    <Typography>📖 Readability Score: {result.readability_score}</Typography>

                    {/* Unused Imports */}
                    <Typography>🔍 Unused Imports:</Typography>
                    <ul>
                      {result.unused_imports.length > 0 ? result.unused_imports.map((imp, index) => (
                        <li key={index}>{imp}</li>
                      )) : <li>No unused imports detected.</li>}
                    </ul>

                    {/* AI Suggestions */}
                    <Typography>💡 AI Suggestions:</Typography>
                    <ul>
                      {result.ai_suggestions.length > 0 ? result.ai_suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      )) : <li>No AI suggestions available.</li>}
                    </ul>

                    {/* Function Breakdown */}
                    <Typography>📌 Function Breakdown:</Typography>
                    <ul>
                      {result.function_breakdown.length > 0 ? result.function_breakdown.map((func, index) => (
                        <li key={index}>{func}</li>
                      )) : <li>No functions found.</li>}
                    </ul>

                    {/* Best Practices Issues */}
                    <Typography>📌 Best Practices Issues:</Typography>
                    <ul>
                      {result.best_practices.length > 0 ? result.best_practices.map((issue, index) => (
                        <li key={index}>{issue}</li>
                      )) : <li>No major best practice violations detected.</li>}
                    </ul>
                  </div>
                ) : (
                  <Typography>Analysis report will appear here.</Typography>
                )}

                {/* Buttons */}
                {result && (
                  <Box className="button-group">
                    <Button variant="contained" onClick={downloadReport} className="download-btn">Download Report 📄</Button>
                    <Button variant="contained" onClick={handleAnalyzeAnother} className="analyze-another-btn">Analyze Another Code 🔄</Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default CodeReview;