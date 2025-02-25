"use client";

import useDebounce from "@/hooks/useDebounce";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchingMenu() {
  const pathname = usePathname();
  const isOrderPage = pathname === "/order";
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
    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedSearchMenu]);

  return (
    <article
      className={`${isOrderPage ? "lg:grow" : "lg:flex-none w-1/3"} relative`}
    >
      <input
        type="text"
        value={searchMenu}
        onChange={handleSearchMenu}
        placeholder="Search menu by name"
        className={`${
          isOrderPage ? "rounded-3xl pr-10 pl-4" : "rounded-lg pl-10 pr-4"
        } w-full py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500`}
      />
      <article
        className={`${
          isOrderPage ? "right-2 rounded-full" : "w-10 justify-center"
        } absolute top-0 h-full flex items-center`}
      >
        {isOrderPage ? (
          <article className="bg-gray-100 rounded-full p-2 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-800"
            />
          </article>
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
        )}
      </article>
    </article>
  );
}
