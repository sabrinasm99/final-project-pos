"use client";

import { useState } from "react";
import MenuTable from "./MenuTable";
import ModalFormMenu from "@/modals/ModalFormMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MenuProps } from "@/types";
import { useListProducts } from "@/api/products/useListProducts";
import { useSearchParams } from "next/navigation";
import SearchingMenu from "./SearchingMenu";

export default function MenuContent() {
  const searchParams = useSearchParams();
  const [showModalMenu, setshowModalMenu] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<MenuProps | null>(null);
  const { products, isLoading, isError, mutateListProducts } = useListProducts(
    searchParams.toString()
  );

  const toggleModalMenu = () => {
    setshowModalMenu(!showModalMenu);
  };

  const handleOpenModalAddMenu = () => {
    setModalTitle("Add");
    toggleModalMenu();
  };

  return (
    <>
      <article className="mx-auto w-4/5 flex mt-3">
        <article className="flex justify-between w-full">
          <SearchingMenu />
          <button
            onClick={handleOpenModalAddMenu}
            className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faPlus} className="h-5 w-5 mr-2" />
            Add Menu
          </button>
        </article>
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
