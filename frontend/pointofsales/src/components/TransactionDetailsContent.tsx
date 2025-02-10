"use client";

import { useTransaction } from "@/api/transactions/useTransaction";
import { transactionList } from "@/data/TransactionList";
import { TransactionDetail } from "@/types";
import {
  currencyFormatter,
  dateFormatter,
  timeFormatter,
} from "@/utils/formatter";
import {
  faArrowLeft,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export default function TransactionDetailsContent() {
  const router = useRouter();
  const { id } = useParams();

  const { transaction, isLoading, isError } = useTransaction(id);

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
    <article className="w-4/5 mx-auto px-8">
      <article className="my-3">
        <button
          className="flex items-center text-gray-600 hover:text-gray-900"
          onClick={() => router.push("/transaction")}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Transactions
        </button>
      </article>

      <article className="bg-white rounded-lg shadow-sm p-6 my-3">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Order ID #{transaction.id}
        </h1>
        <ul className="flex flex-wrap gap-4">
          <li className="flex items-center text-gray-500">
            <FontAwesomeIcon icon={faCalendar} className="mr-2" />
            <p className="text-sm">{dateFormatter(transaction.createdAt)}</p>
          </li>
          <li className="flex items-center text-gray-500">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <p className="text-sm">{timeFormatter(transaction.createdAt)}</p>
          </li>
        </ul>
      </article>

      <article className="flex gap-5 items-start">
        <section className="bg-white rounded-lg shadow-sm w-2/3 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Order Items
          </h2>
          <ul className="space-y-4">
            {transaction.transactionDetails.map(
              (orderItem: TransactionDetail) => (
                <li
                  key={orderItem.product.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <article className="flex gap-2">
                    <img
                      src={orderItem.product.image}
                      className="h-20 w-20 object-contain"
                    />
                    <article className="flex flex-col justify-center">
                      <p className="font-medium text-gray-900">
                        {orderItem.product.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {orderItem.product.category.name}
                      </p>
                    </article>
                  </article>
                  <article className="flex items-center gap-4 text-sm">
                    <p className="text-gray-500">
                      {currencyFormatter(orderItem.product.price)} x{" "}
                      {orderItem.quantity}
                    </p>
                    <p className="font-medium text-gray-900">
                      {currencyFormatter(
                        orderItem.product.price * orderItem.quantity
                      )}
                    </p>
                  </article>
                </li>
              )
            )}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-sm w-1/3 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Payment Summary
          </h2>
          <article className="flex justify-between items-center py-2">
            <p className="text-gray-500">Subtotal</p>
            <p className="text-gray-900">
              {currencyFormatter(transaction.totalAmount)}
            </p>
          </article>
          <article className="border-t border-gray-200 py-2 flex justify-between items-center">
            <p className="text-lg font-semibold text-gray-900">Total</p>
            <p className="text-lg font-bold">
              {currencyFormatter(transaction.totalAmount)}
            </p>
          </article>
          <article className="flex justify-between items-center py-1">
            <p className="text-gray-500">Total Paid</p>
            <p className="text-gray-900">
              {currencyFormatter(transaction.totalPay)}
            </p>
          </article>
          <article className="flex justify-between items-center py-1">
            <p className="text-gray-500">Changes</p>
            <p className="text-gray-900">
              {currencyFormatter(
                transaction.totalPay - transaction.totalAmount
              )}
            </p>
          </article>
        </section>
      </article>
    </article>
  );
}
