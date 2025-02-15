"use client";

import { MenuProps } from "@/types";
import { currencyFormatter } from "@/utils/formatter";
import { useOrderActions } from "@/utils/orderActions";

export default function MenuCard({ item }: { item: MenuProps }) {
  const { addItemToOrder } = useOrderActions();

  const handleAddToCart = () => {
    if (!item.stock) return;
    addItemToOrder(item);
  };

  return (
    <li
      onClick={handleAddToCart}
      className={`${
        item.stock ? "cursor-pointer" : "cursor-default"
      } bg-white p-2 rounded-lg`}
    >
      <article className="h-40 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain bg-gray-100 rounded-lg"
        />
        <article
          className={`${
            item.stock === 0 ? "block" : "hidden"
          } top-0 left-0 absolute w-full h-full flex justify-center items-center`}
        >
          <article className="bg-outOfStock rounded-full w-20 h-20 flex justify-center items-center">
            <p className="text-white font-medium text-center">Out of stock</p>
          </article>
        </article>
      </article>
      <p className="font-medium">{item.name}</p>
      <article className="flex justify-between mt-2">
        <article className="bg-orange-100 text-orange-500 rounded-2xl py-1 px-2 text-sm font-medium">
          <p>{item.category.name}</p>
        </article>
        <p className="text-lg font-medium">{currencyFormatter(item.price)}</p>
      </article>
      <p className="mt-2 text-sm">Stock: {item.stock}</p>
    </li>
  );
}
