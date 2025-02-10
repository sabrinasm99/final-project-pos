"use client";

import { useListTransactions } from "@/api/transactions/useListTransactions";
import { TransactionProps } from "@/types";
import { currencyFormatter, dateFormatter } from "@/utils/formatter";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export default function TransactionListTable() {
  const router = useRouter();
  const { transactions, isLoading, isError } = useListTransactions();

  if (isLoading) {
    return (
      <article className="flex justify-center">
        <ClipLoader size={50} />
      </article>
    );
  }

  if (isError) {
    return (
      <article className="flex justify-center">
        <p className="text-gray-700">An error has been occured</p>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow w-4/5 mx-auto overflow-auto my-3">
      <table className="w-full">
        <thead className="sticky top-0 bg-white">
          <tr className="text-sm text-left text-red-500 border-b border-gray-200 uppercase tracking-wider">
            <th className="py-6 px-4">#</th>
            <th className="py-6 px-4">Order Date</th>
            <th className="py-6 px-4">Order ID</th>
            <th className="py-6 px-4">Total Price</th>
            <th className="py-6 px-4">Total Paid</th>
            <th className="py-6 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions.map((transaction: TransactionProps, index: number) => (
            <tr key={transaction.id} className="hover:bg-gray-50">
              <td className="p-4">
                <p>{index + 1}</p>
              </td>
              <td className="p-4">
                <p>{dateFormatter(transaction.createdAt)}</p>
              </td>
              <td className="p-4">
                <p>{transaction.id}</p>
              </td>
              <td className="p-4">
                <p>{currencyFormatter(transaction.totalAmount)}</p>
              </td>
              <td className="p-4">
                <p>{currencyFormatter(transaction.totalPay)}</p>
              </td>
              <td className="p-4">
                <button
                  onClick={() => router.push(`/transaction/${transaction.id}`)}
                  className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}
