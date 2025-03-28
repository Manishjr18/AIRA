import time
import re
import ast

def review_code(code, language):
    start_time = time.time()

    # 🔥 Code Quality (Basic Scoring System)
    quality_score = 10 - min(len(re.findall(r"\bprint\b", code)), 10)
    
    # 🔥 Readability Score (Based on Comment Ratio)
    total_lines = code.count("\n") + 1
    comment_lines = len(re.findall(r"#.*", code)) if language == "python" else len(re.findall(r"//.*|/\*.*\*/", code))
    readability_score = round((comment_lines / total_lines) * 100, 2) if total_lines > 0 else 0

    # 🔥 Unused Imports Detection
    unused_imports = detect_unused_imports(code, language)

    # 🔥 AI-Powered Code Suggestions
    suggestions = generate_ai_suggestions(code, language)

    # 🔥 Code Complexity Breakdown (Loops, Conditions, Recursion)
    complexity = analyze_complexity(code, language)

    # 🔥 Function Breakdown (Extracting Function Names)
    function_breakdown = extract_function_names(code, language)

    # 🔥 Best Practices Check (Modular, DRY, Clean Code)
    best_practices = check_best_practices(code, language)

    execution_time = round((time.time() - start_time) * 1000, 2)  # ms

    return {
        "execution_time": f"{execution_time} ms",
        "code_quality": f"{quality_score}/10",
        "complexity": complexity,
        "readability_score": f"{readability_score}%",
        "unused_imports": unused_imports,
        "ai_suggestions": suggestions,
        "function_breakdown": function_breakdown,
        "best_practices": best_practices
    }

# ✅ Detect Unused Imports (Python + JavaScript)
def detect_unused_imports(code, language):
    if language == "python":
        imports = re.findall(r"import (\w+)", code)
        return [f"Example: `import {imp}` is unused." for imp in imports] if imports else ["No unused imports detected."]
    elif language == "javascript":
        imports = re.findall(r"import (\w+) from", code)
        return [f"Example: `import {imp}` is unused." for imp in imports] if imports else ["No unused imports detected."]
    return ["Unused imports detection only available for Python & JavaScript."]

# ✅ AI-Powered Code Suggestions for Python, JavaScript, Java, C, C++
def generate_ai_suggestions(code, language):
    suggestions = []

    if language == "python":
        if "print" in code:
            suggestions.append("Consider using logging instead of print statements.")
        if "==" in code and "if" in code:
            suggestions.append("Use 'is' for comparing None instead of '=='.")
        if "for" in code and "range(len(" in code:
            suggestions.append("Use enumerate() instead of range(len()).")
        if "def " in code and "return" not in code:
            suggestions.append("Ensure functions return values where needed.")

    elif language == "javascript":
        if "var " in code:
            suggestions.append("Consider using 'let' or 'const' instead of 'var' for better scoping.")
        if "==" in code:
            suggestions.append("Use '===' instead of '==' to avoid type coercion issues.")
        if "for (let i = 0; i < arr.length; i++)" in code:
            suggestions.append("Use array methods like `map`, `forEach`, or `reduce` instead of traditional loops.")

    elif language == "java":
        if "System.out.println" in code:
            suggestions.append("Consider using a logger instead of System.out.println.")
        if "==" in code and ".equals" not in code:
            suggestions.append("Use '.equals()' for string comparisons instead of '=='.")
        if "public static void main" in code and "throws Exception" not in code:
            suggestions.append("Consider handling exceptions in the main method.")

    elif language in ["c", "cpp"]:
        if "printf" in code:
            suggestions.append("Use 'cout' instead of 'printf' for better C++ readability.")
        if "malloc" in code and "free" not in code:
            suggestions.append("Ensure to free dynamically allocated memory using `free()`.")
        if "for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++)" in code:
            suggestions.append("Use range-based loops in C++11+ for better readability.")

    return suggestions if suggestions else ["No AI suggestions available for this language."]

# ✅ Code Complexity Analysis
def analyze_complexity(code, language):
    loops = len(re.findall(r"\bfor\b|\bwhile\b", code))
    conditions = len(re.findall(r"\bif\b|\belse\b", code))
    recursion = len(re.findall(r"\bdef\b", code)) if language == "python" else 0
    return f"Loops: {loops}, Conditions: {conditions}, Recursion: {recursion}"

# ✅ Extract Function Names
def extract_function_names(code, language):
    if language == "python":
        try:
            function_names = [node.name for node in ast.walk(ast.parse(code)) if isinstance(node, ast.FunctionDef)]
            return function_names if function_names else ["No functions found."]
        except:
            return ["Error analyzing functions."]
    return ["Function analysis not available for this language."]

# ✅ Best Practices Check (Python, Java, C, C++)
def check_best_practices(code, language):
    issues = []

    if language == "python":
        if "global" in code:
            issues.append("Avoid using global variables where possible.")
        if len(re.findall(r"\bdef\b", code)) > 1:
            issues.append("Ensure functions follow the Single Responsibility Principle.")
        if len(re.findall(r"== None", code)):
            issues.append("Use 'is None' instead of '== None'.")

    elif language == "java":
        if "public class" in code and "public static void main" not in code:
            issues.append("Ensure main method is present in the Java program.")
        if "try" in code and "catch" not in code:
            issues.append("Always use 'catch' with 'try' to handle exceptions.")

    elif language in ["c", "cpp"]:
        if "malloc" in code and "free" not in code:
            issues.append("Memory allocated with 'malloc' should be freed using 'free()'.")
        if "scanf" in code:
            issues.append("Use 'fgets()' instead of 'scanf()' to avoid buffer overflows.")

    return issues if issues else ["No major best practice violations detected."]