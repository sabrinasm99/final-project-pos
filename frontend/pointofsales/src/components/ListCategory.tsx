"use client";

import { useListCategories } from "@/api/categories/useListCategories";
import { CategoryProps } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ListCategory() {
  const { categories, isLoading, isError } = useListCategories();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const handleChangeCategory = (id: number) => {
    setCurrentCategoryId(id);
    const params = new URLSearchParams(searchParams.toString());
    if (id) {
      params.set("category", id.toString());
    } else {
      params.delete("category");
    }
    router.push(`/order?${params.toString()}`);
  };

  useEffect(() => {
    if (searchParams.has("category")) {
      const categoryId = searchParams.get("category");
      setCurrentCategoryId(Number(categoryId));
    } else {
      setCurrentCategoryId(0);
    }
  }, [searchParams]);

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
    <ul className="flex flex-none rounded gap-2 mt-3 py-2 overflow-x-auto font-medium">
      <li
        onClick={() => handleChangeCategory(0)}
        className={`${
          currentCategoryId === 0 ? "border-red-500" : "border-white"
        } p-2 cursor-pointer border-2 rounded-lg text-red-500 bg-white flex-none w-32`}
      >
        <p>All Menu</p>
      </li>
      {categories.map((category: CategoryProps) => (
        <li
          key={category.id}
          onClick={() => handleChangeCategory(category.id)}
          className={`${
            currentCategoryId === category.id
              ? "border-red-500"
              : "border-white"
          } p-2 cursor-pointer border-2 rounded-lg text-red-500 bg-white flex-none w-32`}
        >
          <p>{category.name}</p>
        </li>
      ))}
    </ul>
  );
}
