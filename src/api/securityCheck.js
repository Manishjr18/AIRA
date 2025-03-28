import axios from "axios";

export const securityCheck = async (code, language) => {
  try {
    const response = await axios.post("http://127.0.0.1:5000/security-check", {
      code,
      language,
    });
    return response.data;
  } catch (error) {
    console.error("Security Check API Error:", error);
    return { error: "❌ Security analysis failed." };
  }
};