"use client";

import { useAppSelector } from "@/store/hook";
import { currencyFormatter } from "@/utils/formatter";
import { useEffect, useState } from "react";

export default function OrderSummary() {
  const { dataOrder } = useAppSelector((state) => state.order);
  const [totalPrice, setTotalPrice] = useState(0);

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

  return (
    <article className="bg-white w-full p-5 shadow-[0_-5px_10px_rgba(0,0,0,0.1)] mt-auto">
      <section className="flex justify-between py-1">
        <p>Subtotal</p>
        <p>{currencyFormatter(totalPrice)}</p>
      </section>
      <section className="flex justify-between text-xl font-medium py-1 border-t-2 border-gray-300 border-dashed">
        <p>Total</p>
        <p>{currencyFormatter(totalPrice)}</p>
      </section>
      <button
        disabled={!dataOrder.length}
        className={`${
          !dataOrder.length ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
        } w-full text-white rounded-lg py-2 mt-3 font-medium`}
      >
        Place Order
      </button>
    </article>
  );
}
