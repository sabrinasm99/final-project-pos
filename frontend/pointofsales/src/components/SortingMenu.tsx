"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SortingMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortValue, setSortValue] = useState("");

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const [sortBy, sortType] = sort.split("-");
    const params = new URLSearchParams(searchParams.toString());
    if (sortBy && sortType) {
      params.set("sortBy", sortBy);
      params.set("sortType", sortType);
    } else {
      params.delete("sortBy");
      params.delete("sortType");
    }
    router.push(`/order?${params.toString()}`);
  };

  useEffect(() => {
    if (searchParams.has("sortBy") && searchParams.has("sortType")) {
      const sortBy = searchParams.get("sortBy");
      const sortType = searchParams.get("sortType");
      setSortValue(`${sortBy}-${sortType}`);
    } else {
      setSortValue("");
    }
  }, [searchParams]);

  return (
    <select
      value={sortValue}
      onChange={handleChangeSort}
      className="rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 py-2 xl:py-0"
    >
      <option>Sort by</option>
      <option value="name-asc">Sort by name (A-Z)</option>
      <option value="name-desc">Sort by name (Z-A)</option>
      <option value="price-desc">Sort by price (Highest-Lowest)</option>
      <option value="price-asc">Sort by price (Lowest-Highest)</option>
    </select>
  );
}
