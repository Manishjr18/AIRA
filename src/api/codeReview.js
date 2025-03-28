import axios from "axios";

const API_URL = "http://127.0.0.1:5000/code-review";

export const reviewCode = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
