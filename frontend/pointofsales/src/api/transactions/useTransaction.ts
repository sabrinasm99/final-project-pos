import useSWR from "swr";
import axios from "axios";
import { baseURL } from "../BaseURL";

const getTransactionById = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const useTransaction = (id: any) => {
  const { data, error, isLoading } = useSWR(
    `${baseURL}/transactions/${id}`,
    getTransactionById
  );

  return {
    transaction: data,
    isLoading,
    isError: error,
  };
};
