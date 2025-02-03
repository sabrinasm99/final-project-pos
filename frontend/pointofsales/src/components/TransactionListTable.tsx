"use client";

import { transactionList } from "@/data/TransactionList";
import { currencyFormatter } from "@/utils/formatter";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function TransactionListTable() {
  const router = useRouter();
  return (
    <article className="bg-white rounded-lg shadow w-4/5 mx-auto overflow-auto my-3">
      <table className="w-full">
        <thead className="sticky top-0 bg-white">
          <tr className="text-sm text-left text-red-500 border-b border-gray-200 uppercase tracking-wider">
            <th className="py-6 px-4">#</th>
            <th className="py-6 px-4">Order Date</th>
            <th className="py-6 px-4">Order ID</th>
            <th className="py-6 px-4">Total Price</th>
            <th className="py-6 px-4">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactionList.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-4">
                <p>{index + 1}</p>
              </td>
              <td className="p-4">
                <p>{item.orderDate}</p>
              </td>
              <td className="p-4">
                <p>{item.id}</p>
              </td>
              <td className="p-4">
                <p>{currencyFormatter(item.totalPrice)}</p>
              </td>
              <td className="p-4">
                <button
                  onClick={() => router.push(`/transaction/${item.id}`)}
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
