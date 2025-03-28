import React, { useState } from "react";
import { detectBugs } from "../../api/bugDetection";
import { Box, Button, TextField, Typography, Container, Select, MenuItem } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import "../../styles/FeaturePage.css";

const BugDetection = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [executionTime, setExecutionTime] = useState("");
  const [codeRating, setCodeRating] = useState("");
  const [language, setLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);

  const handleBugCheck = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    setIsLoading(true);
    setResult("");
    setExecutionTime("");
    setCodeRating("");

    try {
      const response = await detectBugs({ code, language });
      console.log("API Response:", response);

      let finalReport = "";

      if (response?.errors) {
        finalReport = response.errors;
      } else {
        finalReport = "✅ No critical bugs detected.";
      }

      if (response?.output) {
        finalReport += `\n\n🔍 **Code Output:**\n${response.output}`;
      }

      if (response?.execution_time) {
        setExecutionTime(`⏱️ Execution Time: ${response.execution_time} ms`);
      }

      if (response?.code_rating) {
        setCodeRating(`⭐ Code Quality Rating: ${response.code_rating}/10`);
      }

      setResult(finalReport);
    } catch (error) {
      console.error("Error in API:", error);
      setResult("❌ Error analyzing the code.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result.trim()) return;
    const reportText = `${result}\n\n${executionTime}\n${codeRating}`;
    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bug_report_${language}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAnalyzeAnother = () => {
    setCode("");
    setResult("");
    setExecutionTime("");
    setCodeRating("");
  };

  return (
    <>
      <Box className="main-container">
        <Sidebar />
        <Box className="feature-content">
          <Container maxWidth="lg">
            <Typography variant="h3" className="feature-title">
              🐞 Bug Detection
            </Typography>
            <Typography className="feature-subtext">
              Analyze your code and find hidden bugs instantly!
            </Typography>

            {/* ✅ Fixed Dropdown Spacing */}
            <Box className="language-select" sx={{ marginBottom: "15px" }}>
              <Typography variant="h6">Select Language:</Typography>
              <Select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                sx={{ minWidth: "200px" }}
              >
                <MenuItem value="python">Python</MenuItem>
                <MenuItem value="c">C</MenuItem>
                <MenuItem value="cpp">C++</MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="javascript">JavaScript</MenuItem>
              </Select>
            </Box>

            <Box className="split-container">
              {/* ✅ Code Input Section */}
              <Box className="code-box">
                <TextField
                  label="Paste your code here..."
                  multiline
                  rows={10}
                  fullWidth
                  variant="outlined"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="code-input"
                  disabled={isLoading || !!result}
                />
                <Button 
                  variant="contained" 
                  className={`detect-btn ${isLoading ? "loading" : ""}`}
                  onClick={handleBugCheck}
                  disabled={isLoading || !!result}
                >
                  {isLoading ? "Analyzing..." : "Detect Bugs 🚀"}
                </Button>
              </Box>

              {/* ✅ Analysis Report Section */}
              <Box className="report-box">
                {result ? (
                  <>
                    <Typography variant="h5" className="result-title">
                      🔍 Analysis Result:
                    </Typography>
                    <pre className="report-content">{result}</pre>

                    {executionTime && (
                      <Typography className="execution-time">{executionTime}</Typography>
                    )}

                    {codeRating && (
                      <Typography className="code-rating">{codeRating}</Typography>
                    )}

                    {/* ✅ Button Group */}
                    <Box className="button-group" sx={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                      <Button 
                        variant="contained" 
                        className="download-btn"
                        onClick={downloadReport}
                      >
                        Download Report 📄
                      </Button>
                      <Button 
                        variant="contained" 
                        className="analyze-another-btn"
                        onClick={handleAnalyzeAnother}
                      >
                        Analyze Another Code 🔄
                      </Button>
                    </Box>
                  </>
                ) : (
                  <Typography className="report-placeholder">
                    Analysis report will appear here.
                  </Typography>
                )}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default BugDetection;