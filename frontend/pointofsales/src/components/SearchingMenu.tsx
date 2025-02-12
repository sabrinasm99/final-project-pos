"use client";

import useDebounce from "@/hooks/useDebounce";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchingMenu() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState(
    searchParams.has("search") ? `${searchParams.get("search")}` : ""
  );
  const debouncedSearchMenu = useDebounce(searchMenu, 300);

  const handleSearchMenu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMenu(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearchMenu) {
      params.set("search", debouncedSearchMenu);
    } else {
      params.delete("search");
    }
    router.push(`/order?${params.toString()}`);
  }, [debouncedSearchMenu]);

  return (
    <article className="relative grow">
      <input
        type="text"
        value={searchMenu}
        onChange={handleSearchMenu}
        placeholder="Search menu by name"
        className="w-full ml-2 pr-10 pl-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <article className="absolute top-0 right-0 h-full flex items-center rounded-full">
        <article className="bg-gray-100 rounded-full p-2 flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-800" />
        </article>
      </article>
    </article>
  );
}
