import axios from "axios";

const API_URL = "http://127.0.0.1:5000/code-analysis"; // Backend API URL

export const analyzeCode = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return { error: "Failed to analyze code." };
  }
};