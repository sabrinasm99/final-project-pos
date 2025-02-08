import { baseURL } from "../BaseURL";
import axios from "axios";

export const addCategory = async (data: any) => {
  try {
    const res = await axios.post(`${baseURL}/categories`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
