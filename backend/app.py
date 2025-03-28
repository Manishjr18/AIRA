from flask import Flask, request, jsonify
from flask_cors import CORS
from api.bug_detection import detect_bugs  
from api.code_analysis import analyze_code
from api.code_review import review_code
from api.security_check import analyze_security # ✅ Import security_check function

app = Flask(__name__)
CORS(app)  # ✅ Allow CORS for frontend

# ✅ Error Handling & Logging
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({"error": "Internal server error"}), 500

# ✅ Bug Detection Route
@app.route("/bug-detection", methods=["POST"])
def bug_detection():
    try:
        return detect_bugs()
    except Exception as e:
        print(f"❌ Error in bug detection: {str(e)}")
        return jsonify({"error": "Bug detection failed."}), 500

# ✅ Code Analysis Route
@app.route("/code-analysis", methods=["POST"])
def code_analysis():
    return analyze_code()

# ✅ Code Review Route
@app.route('/code-review', methods=['POST'])
def code_review():
    data = request.get_json()
    code = data.get('code', '')
    language = data.get('language', 'python')

    if not isinstance(code, str) or not code.strip():
        return jsonify({"error": "Code cannot be empty!"}), 400

    review_result = review_code(code.strip(), language.strip())
    return jsonify(review_result)

@app.route("/security-check", methods=["POST"])
def security_check_route():
    try:
        data = request.get_json()

        # ✅ Ensure `data` is a dictionary
        if not isinstance(data, dict):
            return jsonify({"error": "Invalid JSON format"}), 400

        # ✅ Extract and validate 'code' and 'language'
        code = data.get("code", "").strip() if isinstance(data.get("code", ""), str) else ""
        language = data.get("language", "").strip() if isinstance(data.get("language", ""), str) else ""

        if not code:
            return jsonify({"error": "Code is required"}), 400
        if not language:
            return jsonify({"error": "Language is required"}), 400

        # ✅ Debug log
        print(f"🔍 Security Check Request - Language: {language}, Code Length: {len(code)}")

        # ✅ Process security check
        result = analyze_security(code, language)

        # ✅ Ensure result is a valid dictionary
        if not isinstance(result, dict):
            raise ValueError("Invalid response from analyze_code_security")

        return jsonify(result)

    except Exception as e:
        print(f"❌ Error in security check: {str(e)}")  # ✅ Print full error
        return jsonify({"error": f"Server Error: {str(e)}"}), 500


if __name__ == "__main__":
    print("🚀 Server is running on http://127.0.0.1:5000")  
    app.run(debug=False, host="0.0.0.0", port=5000)