import React, { useState } from "react";
import { analyzeCode } from "../../api/codeAnalysis";
import { Box, Button, TextField, Typography, Container, Select, MenuItem } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import "../../styles/FeaturePage.css";

const CodeAnalysis = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [executionTime, setExecutionTime] = useState("");
  const [codeQuality, setCodeQuality] = useState("");
  const [codeComplexity, setCodeComplexity] = useState("");
  const [codeReadability, setCodeReadability] = useState("");
  const [language, setLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeAnalysis = async () => {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    setIsLoading(true);
    setResult("");
    setExecutionTime("");
    setCodeQuality("");
    setCodeComplexity("");
    setCodeReadability("");

    try {
      const response = await analyzeCode({ code, language });
      console.log("API Response:", response);

      if (response) {
        setExecutionTime(response.execution_time || "N/A");
        setCodeQuality(response.code_quality || "N/A");
        setCodeComplexity(response.complexity !== undefined ? response.complexity : "N/A");
        setCodeReadability(response.readability_score !== undefined ? response.readability_score : "N/A");

        // ✅ Fix: `analysis_report` ko properly display kar raha hai.
        setResult(response.analysis_report ? response.analysis_report.replace(/\n/g, "\n") : "✅ No critical issues found.");
      }
    } catch (error) {
      console.error("Error in API:", error);
      setResult("❌ Error analyzing the code.");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result.trim()) return;

    const reportContent = `
      🔥 AI-Code-Reviewer Report 🔥
      --------------------------------
      🛠 Language: ${language}
      ⏱ Execution Time: ${executionTime}
      ⭐ Code Quality: ${codeQuality}
      🔢 Code Complexity: ${codeComplexity}
      📖 Code Readability: ${codeReadability}
      
      🔍 Analysis Report:
      ${result}

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
    link.download = `code_analysis_${language}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAnalyzeAnother = () => {
    setCode("");
    setResult("");
    setExecutionTime("");
    setCodeQuality("");
    setCodeComplexity("");
    setCodeReadability("");
  };

  return (
    <>
      <Box className="main-container">
        <Sidebar />
        <Box className="feature-content">
          <Container maxWidth="lg">
            <Typography variant="h3" className="feature-title">
              📊 Code Analysis
            </Typography>
            <Typography className="feature-subtext">
              Analyze your code's performance, quality, and best practices!
            </Typography>

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
                  onClick={handleCodeAnalysis}
                  disabled={isLoading || !!result}
                >
                  {isLoading ? "Analyzing..." : "Analyze Code 🚀"}
                </Button>
              </Box>

              <Box className="report-box">
                {result ? (
                  <>
                    <Typography variant="h5" className="result-title">
                      🔍 Analysis Result:
                    </Typography>

                    <Box className="scrollable-report">
                      <Typography className="report-detail">⏱ Execution Time: {executionTime}</Typography>
                      <Typography className="report-detail">⭐ Code Quality: {codeQuality}</Typography>
                      <Typography className="report-detail">🔢 Code Complexity: {codeComplexity}</Typography>
                      <Typography className="report-detail">📖 Code Readability: {codeReadability}</Typography>

                      <Box className="report-content-box">
                        <pre className="report-content">{result}</pre>
                      </Box>
                    </Box>

                    <Box className="button-group">
                      <Button variant="contained" className="download-btn" onClick={downloadReport}>
                        Download Report 📄
                      </Button>
                      <Button variant="contained" className="analyze-another-btn" onClick={handleAnalyzeAnother}>
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

export default CodeAnalysis;