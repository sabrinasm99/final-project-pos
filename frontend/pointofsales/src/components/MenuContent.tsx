"use client";

import { useState } from "react";
import MenuTable from "./MenuTable";
import ModalFormMenu from "@/modals/ModalFormMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MenuDataProps } from "@/types";
import { useListProducts } from "@/api/products/useListProducts";

export default function MenuContent() {
  const [showModalMenu, setshowModalMenu] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<MenuDataProps | null>(null);
  const { products, isLoading, isError, mutateListProducts } =
    useListProducts();

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
        products={products}
        isLoading={isLoading}
        isError={isError}
        mutateListProducts={mutateListProducts}
      />
      {showModalMenu && (
        <ModalFormMenu
          toggleModalMenu={toggleModalMenu}
          title={modalTitle}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          mutateListProducts={mutateListProducts}
        />
      )}
    </>
  );
}
