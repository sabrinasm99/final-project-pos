"use client";

import { useState } from "react";
import MenuTable from "./MenuTable";
import ModalFormMenu from "@/modals/ModalFormMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MenuProps } from "@/types";

export default function MenuContent() {
  const [showModalMenu, setshowModalMenu] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<MenuProps | null>(null);

  const toggleModalMenu = () => {
    setshowModalMenu(!showModalMenu);
  };

  const handleOpenModalAddMenu = () => {
    setModalTitle("Add");
    toggleModalMenu();
  };

  return (
    <>
      <article className="mx-auto w-4/5 flex my-3">
        <button
          onClick={handleOpenModalAddMenu}
          className="inline-flex items-center ml-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
        >
          <FontAwesomeIcon icon={faPlus} className="h-5 w-5 mr-2" />
          Add Menu
        </button>
      </article>
      <MenuTable
        toggleModalMenu={toggleModalMenu}
        setModalTitle={setModalTitle}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      {showModalMenu && (
        <ModalFormMenu
          toggleModalMenu={toggleModalMenu}
          title={modalTitle}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      )}
    </>
  );
}
