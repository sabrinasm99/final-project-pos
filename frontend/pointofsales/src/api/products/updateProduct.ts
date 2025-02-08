import { baseURL } from "../BaseURL";
import axios from "axios";

export const updateProduct = async (id: any, data: any) => {
  try {
    const res = await axios.put(`${baseURL}/products/${id}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
