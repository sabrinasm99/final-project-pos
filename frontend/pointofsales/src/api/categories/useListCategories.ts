import useSWR from "swr";
import axios from "axios";
import { baseURL } from "../BaseURL";

const getAllCategories = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export function useListCategories() {
  const { data, error, isLoading, mutate } = useSWR(
    `${baseURL}/categories`,
    getAllCategories
  );

  return {
    categories: data,
    isLoading,
    isError: error,
    mutateListCategories: mutate,
  };
}
