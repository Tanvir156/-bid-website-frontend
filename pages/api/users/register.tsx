import axios from "axios";
import config from "./../../../config";
const API_URL = `${config.API_URL}/api/users`; // Update with your API endpoint
export const createUser = async (userData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(API_URL, userData, config);
    console.log("Response from createUser:", response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
