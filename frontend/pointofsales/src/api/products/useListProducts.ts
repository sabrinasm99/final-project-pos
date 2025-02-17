import useSWR from "swr";
import axios from "axios";
import { baseURL } from "../BaseURL";

const getAllProducts = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export function useListProducts(params: string) {
  const url = params ? `${baseURL}/products?${params}` : `${baseURL}/products`;

  const { data, error, isLoading, mutate } = useSWR(url, getAllProducts);

  return {
    products: data,
    isLoading,
    isError: error,
    mutateListProducts: mutate,
  };
}
