export const detectBugs = async ({ code, language }) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/bug-detection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, language }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Bug detection API error:", error);
    return { error: "API request failed." };
  }
};