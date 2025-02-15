"use client";
import ClipLoader from "react-spinners/ClipLoader";
import MenuCard from "./MenuCard";
import { useListProducts } from "@/api/products/useListProducts";
import { MenuProps } from "@/types";
import { useSearchParams } from "next/navigation";

export default function ListMenu() {
  const searchParams = useSearchParams();

  const { products, isLoading, isError } = useListProducts(
    searchParams.toString()
  );

  if (isLoading) {
    return null;
  }

  if (isError) {
    return (
      <article className="flex justify-center">
        <p className="text-gray-700">An error has been occured</p>
      </article>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 overflow-y-auto pr-1">
      {products.map((item: MenuProps) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </ul>
  );
}
