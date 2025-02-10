import useSWR from "swr";
import axios from "axios";
import { baseURL } from "../BaseURL";

const getAllTransactions = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export function useListTransactions() {
  const { data, error, isLoading, mutate } = useSWR(
    `${baseURL}/transactions`,
    getAllTransactions
  );

  return {
    transactions: data,
    isLoading,
    isError: error,
    mutateListTransactions: mutate,
  };
}
