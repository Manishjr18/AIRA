from flask import Flask, request, jsonify
import time
import re

app = Flask(__name__)

def analyze_security(code, language):
    start_time = time.time()
    
    for _ in range(1000000):  
        pass  
    
    execution_time = round(time.time() - start_time, 4)  # Execution time calculate
    
    # ✅ **Ensure Execution Time is Always Valid**
    execution_time = execution_time if execution_time > 0 else "N/A"
    
    # ✅ **Initialize Security Result**
    result = {
        "execution_time": f"{execution_time}",
        "critical_issues": 0,   # ✅ **Make sure this updates correctly**
        "vulnerabilities": [],
        "hardcoded_secrets": [],
        "best_practices": [],
        "security_tips": []
    }

    ### ✅ **Function to Increment Critical Issue Count Safely**
    def add_critical_issue(issue_type, message):
        """ Adds critical security issues properly. """
        result[issue_type].append(message)
        result["critical_issues"] += 1  # ✅ **Now always updates correctly**

    # ✅ **OS Command Execution Check**
    if re.search(r'\bos\.system\b|\bsubprocess\b', code):
        add_critical_issue("vulnerabilities", "❌ **OS command execution risk.** Avoid using `os.system()` and `subprocess`.")

    # ✅ **Hardcoded Secrets Check**
    hardcoded_secrets_patterns = [
        r'\bpassword\s*=\s*["\'][^"\']{4,}["\']',
        r'\bsecret\s*=\s*["\'][^"\']{4,}["\']',
        r'\bapikey\s*=\s*["\'][^"\']{4,}["\']',
        r'\btoken\s*=\s*["\'][^"\']{4,}["\']',
        r'\bAWS_ACCESS_KEY_ID\s*=\s*["\'][^"\']{4,}["\']',
        r'\bAWS_SECRET_ACCESS_KEY\s*=\s*["\'][^"\']{4,}["\']',
        r'\bDB_PASSWORD\s*=\s*["\'][^"\']{4,}["\']'
    ]
    for pattern in hardcoded_secrets_patterns:
        if re.search(pattern, code, re.IGNORECASE):
            add_critical_issue("hardcoded_secrets", "⚠️ **Hardcoded secret found.** Store sensitive data in environment variables.")

    # ✅ **SQL Injection Risk (f-string aur format() detect karega)**
    if re.search(r'\b(execute|exec|format|input|f")\b', code, re.IGNORECASE):
        add_critical_issue("vulnerabilities", "⚠️ **Potential SQL Injection risk detected.** Use parameterized queries instead of direct string formatting.")

    # ✅ **Unsafe `eval()` Usage**
    if "eval(" in code:
        add_critical_issue("vulnerabilities", "❌ **Unsafe `eval()` usage detected.** Avoid using eval as it can execute arbitrary code.")

    # ✅ **Best Practices Checks (NOT Critical)**
    if "try:" not in code and "except" not in code:
        result["best_practices"].append("⚠️ **Lack of error handling detected.** Always use try-except blocks to handle exceptions.")

    if "import *" in code:
        result["best_practices"].append("⚠️ **Avoid using wildcard imports (`import *`).** Use explicit imports instead.")

    # ✅ **AI Security Insights**
    result["security_tips"].extend([
        "🔍 Review and fix the above security risks before deploying your code.",
        "🛡️ Use static analysis tools like Bandit (Python), ESLint (JavaScript), or SonarQube (Java) to detect security flaws.",
        "🔑 Consider using a secrets manager instead of hardcoding sensitive data."
    ])

    # ✅ **Final Execution Time Calculation**
    result["execution_time"] = round(time.time() - start_time, 4)

    return result

@app.route('/security-check', methods=['POST'])
def security_check():
    data = request.json
    code = data.get("code", "")
    language = data.get("language", "")

    if not code or not language:
        return jsonify({"error": "No code provided for analysis."}), 400

    analysis_result = analyze_security(code, language)
    return jsonify(analysis_result)

if __name__ == '__main__':
    app.run(debug=True)