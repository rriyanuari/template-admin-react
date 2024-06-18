import axios from "axios";

export const getEmployee = async () => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  try {
    const response = await axios.get(`${baseURL}/employees`);
    return response.data;
  } catch (error) {
    return error;
  }
};
