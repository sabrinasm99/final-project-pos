import { baseURL } from "../BaseURL";
import axios from "axios";

export const addProduct = async (data: any) => {
  try {
    const res = await axios.post(`${baseURL}/products`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
