"use client";

import { MenuDataProps } from "@/types";
import { currencyFormatter } from "@/utils/formatter";
import { useOrderActions } from "@/utils/orderActions";

export default function MenuCard({ item }: { item: MenuDataProps }) {
  const { addItemToOrder } = useOrderActions();

  return (
    <li
      onClick={() => addItemToOrder(item)}
      className="bg-white p-2 rounded-lg cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-contain bg-gray-100 rounded-lg"
      />
      <p className="font-medium">{item.name}</p>
      <article className="flex justify-between mt-2">
        <article className="bg-orange-100 text-orange-500 rounded-2xl py-1 px-2 text-sm font-medium">
          <p>{item.category.name}</p>
        </article>
        <p className="text-lg font-medium">{currencyFormatter(item.price)}</p>
      </article>
    </li>
  );
}
