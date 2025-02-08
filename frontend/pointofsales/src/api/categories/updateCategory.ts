import { baseURL } from "../BaseURL";
import axios from "axios";

export const updateCategory = async (id: any, data: any) => {
  try {
    const res = await axios.put(`${baseURL}/categories/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
