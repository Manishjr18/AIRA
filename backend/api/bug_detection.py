import subprocess
import tempfile
import os
import time
from flask import request, jsonify

# 🛠 Supported Languages and Commands
LANGUAGE_COMMANDS = {
    "python": "python3",
    "javascript": "node",
    "java": "javac",
    "cpp": "g++",
    "c": "gcc"
}

def detect_bugs():
    try:
        data = request.json
        code = data.get("code", "")
        lang = data.get("language", "").lower()

        if not code or lang not in LANGUAGE_COMMANDS:
            return jsonify({"error": "Invalid code or language"}), 400

        # ✅ Code ko temporary file me save karna
        ext_map = {"python": ".py", "javascript": ".js", "java": ".java", "cpp": ".cpp", "c": ".c"}
        with tempfile.NamedTemporaryFile(delete=False, suffix=ext_map[lang]) as temp_file:
            temp_file.write(code.encode())
            temp_file_path = temp_file.name

        # ✅ Execution Start Time
        start_time = time.time()

        # ✅ Language ke hisaab se command run karna
        command = f"{LANGUAGE_COMMANDS[lang]} {temp_file_path}"
        process = subprocess.run(command, shell=True, capture_output=True, text=True)
        output = process.stdout + process.stderr

        # ✅ Execution Time Calculate karna
        execution_time = round((time.time() - start_time) * 1000, 2)  # ms me time

        os.remove(temp_file_path)  # Temporary file delete kar dena

        # ✅ Code Quality Rating (basic logic)
        code_rating = 10 if execution_time < 50 else 8 if execution_time < 100 else 6

        # ✅ Professional Report Formatting
        analysis_result = {
            "language": lang,
            "errors": output if output else "✅ No critical bugs detected.",
            "execution_time": f"{execution_time}",
            "code_rating": f"{code_rating}",
            "message": "Bug detection completed."
        }

        return jsonify(analysis_result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500