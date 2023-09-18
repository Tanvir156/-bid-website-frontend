import axios from "axios";
import config from "./../../../config";
const API_URL = `${config.API_URL}/api/products/upload`; // Update with your API endpoint
export const uploadproducts = async (data, config) => {
  try {
    const response = await axios.post(API_URL, data, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};
