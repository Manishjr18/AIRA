import React, { useState } from "react";
import { securityCheck } from "../../api/securityCheck";
import { Box, Button, TextField, Typography, Container, Select, MenuItem } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import "../../styles/FeaturePage.css";

const SecurityCheck = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState("python");
  const [isLoading, setIsLoading] = useState(false);

  const handleSecurityCheck = async () => {
    if (!code.trim()) {
      alert("⚠️ Please enter some code.");
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const response = await securityCheck(code, language);
      console.log("API Response:", response);
      setResult(response || {});
    } catch (error) {
      console.error("API Error:", error);
      setResult({ error: "❌ Security analysis failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadReport = () => {
    if (!result) return;
    const reportContent = `
      🔥 AI Security Analysis Report 🔥
      --------------------------------
      🛠 Language: ${language}
      ⏱ Execution Time: ${result.execution_time || "N/A"}
      🚨 Critical Security Issues: ${result.critical_issues?.length || 0}
      
      🔍 Detected Vulnerabilities:
      ${result.vulnerabilities?.length ? result.vulnerabilities.join("\n") : "No vulnerabilities detected."}
      🔐 Security Best Practices:
      ${result.best_practices?.length ? result.best_practices.join("\n") : "No major security issues found."}
      📌 Hardcoded Secrets Found:
      ${result.hardcoded_secrets?.length ? result.hardcoded_secrets.join("\n") : "None detected."}
      --------------------------------
      💡 AI Security Insights:
      ${result.security_tips?.length ? result.security_tips.join("\n") : "No additional insights."}
      💡 User Submitted Code:
      --------------------------------
      ${code}
      --------------------------------
      🚀 "Secured by AI, Powered by Intelligence." 🚀
    `;
    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `security_check_${language}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAnalyzeAnother = () => {
    setCode("");
    setResult(null);
  };

  return (
    <Box className="main-container">
      <Sidebar />
      <Box className="feature-content">
        <Container maxWidth="lg">
          <Typography variant="h3" className="feature-title">
            🔐 AI Security Check
          </Typography>
          <Typography className="feature-subtext">
            Scan your code for security vulnerabilities and best practices!
          </Typography>
          
          {/* Language Select */}
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

          <Box sx={{ height: "20px" }} /> {/* Spacing Fix */}
          
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
                onClick={handleSecurityCheck} 
                disabled={isLoading || !!result}
                className="review-button"
              >
                {isLoading ? "Analyzing..." : "Run Security Check 🔍"}
              </Button>
            </Box>

            {/* Report Box */}
            <Box className="report-box animated-border">
              {result ? (
                <div className="scrollable-report">
                  <Typography variant="h5">📜 Security Report:</Typography> <br />
                  <Typography>⏱ Execution Time: {result.execution_time || "N/A"}</Typography>
                  {/* <Typography>🚨 Critical Security Issues: {result.critical_issues?.length || 0}</Typography> */}
                  <Typography>🚨 Critical Security Issues: {result.critical_issues || 0}</Typography>
                  
                  {/* Vulnerabilities */}
                  <Typography>🔍 Detected Vulnerabilities:</Typography>
                  <ul>
                    {result.vulnerabilities?.length ? result.vulnerabilities.map((vuln, index) => (
                      <li key={index}>{vuln}</li>
                    )) : <li>No vulnerabilities detected.</li>}
                  </ul>

                  {/* Hardcoded Secrets */}
                  <Typography>📌 Hardcoded Secrets:</Typography>
                  <ul>
                    {result.hardcoded_secrets?.length ? result.hardcoded_secrets.map((secret, index) => (
                      <li key={index}>{secret}</li>
                    )) : <li>No hardcoded secrets found.</li>}
                  </ul>

                  {/* Best Practices Issues */}
                  <Typography>🔐 Security Best Practices:</Typography>
                  <ul>
                    {result.best_practices?.length ? result.best_practices.map((issue, index) => (
                      <li key={index}>{issue}</li>
                    )) : <li>No major security best practice violations.</li>}
                  </ul>

                  {/* AI Security Insights */}
                  <Typography>💡 AI Security Insights:</Typography>
                  <ul>
                    {result.security_tips?.length ? result.security_tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    )) : <li>No additional security insights available.</li>}
                  </ul>
                </div>
              ) : (
                <Typography>Security analysis report will appear here.</Typography>
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
  );
};

export default SecurityCheck;