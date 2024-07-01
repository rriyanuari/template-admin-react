import { QueryKey } from "@tanstack/query-core";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const moduleURL = "employees";

export const getEmployee = async (params: any) => {
  try {
    const response = await axios.get(`${baseURL}/${moduleURL}`, { params });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const postEmployee = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/${moduleURL}`, data);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const putEmployee = async (uid: string, data: any) => {
  try {
    const response = await axios.put(`${baseURL}/${moduleURL}/${uid}`, data);

    return response.data;
  } catch (error) {
    return error;
  }
};
