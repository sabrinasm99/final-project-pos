import { baseURL } from "../BaseURL";
import axios from "axios";

export const deleteProduct = async (id: any) => {
  try {
    const res = await axios.delete(`${baseURL}/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
