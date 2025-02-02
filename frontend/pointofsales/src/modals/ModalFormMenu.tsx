"use client";

import FormMenu from "@/components/FormMenu";
import { MenuProps } from "@/types";
import React from "react";

type ModalFormMenuProps = {
  toggleModalMenu: () => void;
  title: string;
  selectedMenu: MenuProps | null;
  setSelectedMenu: React.Dispatch<MenuProps | null>;
};

export default function ModalFormMenu({
  toggleModalMenu,
  title,
  selectedMenu,
  setSelectedMenu,
}: ModalFormMenuProps) {
  const handleCloseModal = () => {
    if (title === "Edit") {
      setSelectedMenu(null);
    }
    toggleModalMenu();
  };

  return (
    <>
      <main className="fixed rounded-md z-20 p-6 bg-white top-50% left-50% -translate-x-50% -translate-y-50% shadow-md w-1/3 max-h-4/5 overflow-y-auto">
        <h2 className="text-2xl font-medium">{title} Menu</h2>
        <FormMenu title={title} selectedMenu={selectedMenu} />
      </main>
      <div
        onClick={handleCloseModal}
        className="fixed z-10 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
