"use client";

import SidebarNav from "@/modals/SidebarNav";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavigationButton() {
  const [showSidebarNav, setShowSidebarNav] = useState(false);

  const toggleSidebarNav = () => {
    setShowSidebarNav(!showSidebarNav);
  };

  return (
    <>
      <article
        onClick={toggleSidebarNav}
        className="rounded-full bg-white p-2 flex justify-center items-center cursor-pointer hover:bg-gray-50"
      >
        <FontAwesomeIcon icon={faBars} className="text-red-500 w-5 h-5" />
      </article>

      <SidebarNav
        onClose={() => setShowSidebarNav(false)}
        showSidebarNav={showSidebarNav}
      />
    </>
  );
}
