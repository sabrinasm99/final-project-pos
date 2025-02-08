"use client";
import ClipLoader from "react-spinners/ClipLoader";
import MenuCard from "./MenuCard";
import { useListProducts } from "@/api/products/useListProducts";
import { MenuDataProps } from "@/types";

export default function ListMenu() {
  const { products, isLoading, isError } = useListProducts();

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
    <ul className="grid grid-cols-4 gap-3 overflow-y-auto pr-1">
      {products.map((item: MenuDataProps) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </ul>
  );
}
