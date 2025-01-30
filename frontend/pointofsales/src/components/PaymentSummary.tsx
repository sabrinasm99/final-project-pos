"use client";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import { clear } from "@/store/slices/orderSlice";
import { currencyFormatter } from "@/utils/formatter";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function PaymentSummary() {
  const { dataOrder } = useAppSelector((state) => state.order);
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);
  const [changes, setChanges] = useState(0);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataOrder.length) {
      const newTotalPrice = dataOrder.reduce((prev, current) => {
        prev += current.price * current.quantity;
        return prev;
      }, 0);
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [dataOrder]);

  useEffect(() => {
    if (totalPaid >= totalPrice) {
      setChanges(totalPaid - totalPrice);
    } else {
      setChanges(0);
    }
  }, [totalPaid]);

  const handleChangeTotalPaid = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTotalPaid(Number(e.target.value));
  };

  const handleCheckout = () => {
    Swal.fire({
      title: "Success",
      text: "Your order has been successfully completed.",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clear());
        router.push("/");
      }
    });
  };

  return (
    <article className="sticky top-16 z-0 bg-white rounded-lg shadow p-6 space-y-6 items-start">
      <section className="text-center pb-6 border-b border-gray-200">
        <h3 className="text-sm text-gray-500 mb-1">Total Price</h3>
        <p className="text-4xl font-bold text-gray-900">
          {currencyFormatter(totalPrice)}
        </p>
      </section>

      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Payment Method
        </h3>
        {[{ id: "cash", name: "Cash", icon: faMoneyBill }].map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`w-full flex items-center p-3 rounded-lg border ${
              selectedMethod === method.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <FontAwesomeIcon
              icon={method.icon}
              className={`h-5 w-5 ${
                selectedMethod === method.id ? "text-blue-500" : "text-gray-400"
              }`}
            />
            <p
              className={`ml-3 font-medium ${
                selectedMethod === method.id ? "text-blue-700" : "text-gray-700"
              }`}
            >
              {method.name}
            </p>
          </button>
        ))}
      </section>

      <section>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Amount of Paid
        </h3>
        <input
          type="text"
          value={totalPaid ? totalPaid : ""}
          onChange={handleChangeTotalPaid}
          placeholder="$0"
          className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 rounded-lg p-2"
        />
      </section>

      <section className="flex justify-between text-sm font-medium">
        <h3 className="text-gray-700">Changes</h3>
        <p>{changes ? currencyFormatter(changes) : changes}</p>
      </section>

      <button
        onClick={handleCheckout}
        disabled={totalPaid < totalPrice}
        className={`${
          totalPaid >= totalPrice && totalPrice !== 0
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gray-400"
        } text-white w-full py-3 rounded-lg font-medium transition-colors`}
      >
        Order
      </button>
    </article>
  );
}
