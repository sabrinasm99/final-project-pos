"use client";

import { useAppSelector } from "@/store/hook";

export default function OrderItemsListTable() {
  const { dataOrder } = useAppSelector((state) => state.order);
  return (
    <article className="bg-white rounded-lg shadow p-6">
      <table className="w-full">
        <thead>
          <tr className="text-sm text-red-500 border-b border-gray-200 uppercase tracking-wider">
            <th className="text-left pb-4">Item</th>
            <th className="text-center pb-4">Quantity</th>
            <th className="pb-4 text-right">Price</th>
            <th className="pb-4 text-right">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {dataOrder.length ? (
            dataOrder.map((item) => (
              <tr key={item.id} className="text-gray-800">
                <td className="py-4 flex">
                  <img
                    src={item.image}
                    alt="img"
                    className="h-20 w-20 object-contain bg-gray-100 rounded-lg"
                  />
                  <p className="ml-2 font-medium">{item.name}</p>
                </td>
                <td className="py-4 text-center">{item.quantity}</td>
                <td className="py-4 text-right">${item.price.toFixed(2)}</td>
                <td className="py-4 text-right">
                  ${(item.price * 1).toFixed(2)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                No orders yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </article>
  );
}
