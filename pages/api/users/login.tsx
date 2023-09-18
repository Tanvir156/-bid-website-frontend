import axios from "axios";
import config from "./../../../config";
const API_URL = `${config.API_URL}/api/users/login`;
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
