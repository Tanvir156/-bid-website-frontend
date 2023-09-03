import axios from "axios";

const API_URL = "https://bid-website.onrender.com/api/users/login"; // Update with your API endpoint
export const loginUser = async (userData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(API_URL, userData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
