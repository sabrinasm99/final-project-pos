import { baseURL } from "../BaseURL";
import axios from "axios";

export const addTransaction = async (data: any) => {
  try {
    const res = await axios.post(`${baseURL}/transactions`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
