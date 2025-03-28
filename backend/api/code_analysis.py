import subprocess
import tempfile
import os
import time
import ast
import radon.complexity as radon
from flask import Flask, request, jsonify
from radon.metrics import mi_visit

app = Flask(__name__)

def calculate_cyclomatic_complexity(code, lang):
    """ Calculate Cyclomatic Complexity for all languages """
    try:
        if lang == "python":
            blocks = radon.cc_visit(code)
            return sum(block.complexity for block in blocks) if blocks else 1
        elif lang in ["javascript", "java", "cpp", "c"]:
            return count_loops_conditions(code)[0] + count_loops_conditions(code)[1] + 1
    except Exception:
        return 1

def calculate_readability_score(code, lang):
    """ Calculate Readability Score for all languages """
    try:
        if lang == "python":
            return round(mi_visit(code, True), 2)
        elif lang == "javascript":
            return 100 - (code.count(";") * 2 + code.count("{") * 1.5)  
        elif lang in ["java", "cpp", "c"]:
            return 100 - (code.count(";") * 1.5 + code.count("{") * 2) 
    except Exception:
        return 50  

def count_loops_conditions(code):
    """ Count for-loops, while-loops, and if-conditions """
    try:
        tree = ast.parse(code)
        loops = sum(isinstance(node, (ast.For, ast.While)) for node in ast.walk(tree))
        conditions = sum(isinstance(node, ast.If) for node in ast.walk(tree))
        return loops, conditions
    except:
        return 0, 0

@app.route("/analyze-code", methods=["POST"])
def analyze_code():
    try:
        data = request.json
        code = data.get("code", "")
        lang = data.get("language", "").lower()

        if not code or lang not in ["python", "javascript", "java", "cpp", "c"]:
            return jsonify({"error": "Invalid code or language"}), 400

        ext_map = {"python": ".py", "javascript": ".js", "java": ".java", "cpp": ".cpp", "c": ".c"}
        
        with tempfile.NamedTemporaryFile(delete=False, suffix=ext_map[lang]) as temp_file:
            temp_file.write(code.encode())
            temp_file_path = temp_file.name

        command_map = {
            "python": f"python3 {temp_file_path}",
            "javascript": f"node {temp_file_path}",
            "java": f"javac {temp_file_path}",
            "cpp": f"g++ {temp_file_path} -o {temp_file_path}.out && {temp_file_path}.out",
            "c": f"gcc {temp_file_path} -o {temp_file_path}.out && {temp_file_path}.out"
        }

        command = command_map[lang]
        
        start_time = time.time()
        process = subprocess.run(command, shell=True, capture_output=True, text=True)
        end_time = time.time()
        execution_time = round((end_time - start_time) * 1000, 2)

        output = process.stdout + process.stderr
        os.remove(temp_file_path)

        complexity = calculate_cyclomatic_complexity(code, lang)
        readability = calculate_readability_score(code, lang)
        loops, conditions = count_loops_conditions(code) if lang == "python" else (0, 0)

        code_rating = 10 if execution_time < 50 else 8 if execution_time < 100 else 6

        performance_tips = []
        if "for" in code or "while" in code:
            performance_tips.append("⚡ Consider optimizing loops for better performance.")
        if "==" in code:
            performance_tips.append("🧐 Use 'is' instead of '==' in Python for None comparison.")
        if "eval" in code:
            performance_tips.append("⚠️ Avoid 'eval()' as it can introduce security vulnerabilities.")

        analysis_result = {
            "language": lang,
            "execution_time": f"{execution_time} ms",
            "code_quality": f"{code_rating}/10",
            "complexity": complexity,
            "readability_score": readability,
            "loops_count": loops,
            "if_conditions": conditions,
            "analysis_report": output if output else "✅ No critical issues found.",
            "performance_tips": performance_tips
        }

        return jsonify(analysis_result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)