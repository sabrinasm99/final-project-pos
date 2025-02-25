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

export function useListCategories(searchCategory = "") {
  const url = searchCategory
    ? `${baseURL}/categories?${searchCategory}`
    : `${baseURL}/categories`;

  const { data, error, isLoading, mutate } = useSWR(url, getAllCategories);

  return {
    categories: data,
    isLoading,
    isError: error,
    mutateListCategories: mutate,
  };
}
