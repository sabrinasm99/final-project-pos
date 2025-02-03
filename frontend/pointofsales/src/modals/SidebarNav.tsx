"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBurger,
  faRectangleList,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarNavProps {
  onClose: () => void;
  showSidebarNav: boolean;
}

export default function SidebarNav({
  onClose,
  showSidebarNav,
}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      <article
        className={`fixed bg-red-500 text-white top-0 left-0 h-full w-60 flex flex-col py-5 z-20
          transform transition-all duration-300 ease-in-out shadow-[5px_0_10px_rgba(0,0,0,0.1)]
          ${showSidebarNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <article className="border-b-4 border-yellow-300 pb-5">
          <h1 className="text-2xl text-center font-bold">Deli Burger</h1>
        </article>
        <ul className="mt-8 text-lg">
          <Link href="/order">
            <li
              className={`${
                pathname === "/order" ? "bg-red-600" : "bg-transparent"
              } font-medium flex items-center px-3 py-4 hover:bg-red-600 cursor-pointer transition-colors`}
            >
              <FontAwesomeIcon icon={faBurger} />
              <p className="ml-3">Order</p>
            </li>
          </Link>
          <Link href="/menu">
            <li
              className={`${
                pathname === "/menu" ? "bg-red-600" : "bg-transparent"
              } font-medium flex items-center px-3 py-4 hover:bg-red-600 cursor-pointer transition-colors`}
            >
              <FontAwesomeIcon icon={faRectangleList} />
              <p className="ml-3">Menu</p>
            </li>
          </Link>
          <Link href="/category">
            <li
              className={`${
                pathname.match(/\/category\/*/g)
                  ? "bg-red-600"
                  : "bg-transparent"
              } font-medium flex items-center px-3 py-4 hover:bg-red-600 cursor-pointer transition-colors`}
            >
              <FontAwesomeIcon icon={faShapes} />
              <p className="ml-3">Category</p>
            </li>
          </Link>
          <Link href="/transaction">
            <li
              className={`${
                pathname.match(/\/transaction\/*/g)
                  ? "bg-red-600"
                  : "bg-transparent"
              } font-medium flex items-center px-3 py-4 hover:bg-red-600 cursor-pointer transition-colors`}
            >
              <FontAwesomeIcon icon={faBook} />
              <p className="ml-3">Transaction</p>
            </li>
          </Link>
        </ul>
      </article>
      <div
        onClick={onClose}
        className={`fixed z-10 top-0 left-0 h-full w-full bg-backdrop
          transition-all duration-300 ease-in-out
          ${showSidebarNav ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
    </>
  );
}
