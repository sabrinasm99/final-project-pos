import useSWR from "swr";
import axios from "axios";
import { baseURL } from "../BaseURL";

const getCategoryById = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useCategory = (id: any) => {
  const { data, error, isLoading } = useSWR(
    `${baseURL}/categories/${id}`,
    getCategoryById
  );

  return {
    category: data,
    isLoading,
    isError: error,
  };
};
