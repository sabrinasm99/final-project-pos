"use client";

import useDebounce from "@/hooks/useDebounce";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchingCategory() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchCategory, setSearchCategory] = useState(
    searchParams.has("searchCategory")
      ? `${searchParams.get("searchCategory")}`
      : ""
  );
  const debouncedSearchCategory = useDebounce(searchCategory, 300);

  const handleSearchCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCategory(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearchCategory) {
      params.set("searchCategory", debouncedSearchCategory);
    } else {
      params.delete("searchCategory");
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedSearchCategory]);

  return (
    <article className="relative w-1/3">
      <input
        type="text"
        value={searchCategory}
        onChange={handleSearchCategory}
        placeholder="Search category by name"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <article className="absolute top-0 h-full w-10 flex justify-center items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
      </article>
    </article>
  );
}
