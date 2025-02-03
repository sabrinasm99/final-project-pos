"use client";

import ModalFormCategory from "@/modals/ModalFormCategory";
import { CategoryProps } from "@/types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CategoryTable from "./CategoryTable";

export default function CategoryContent() {
  const [showModalCategory, setshowModalCategory] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(null);

  const toggleModalCategory = () => {
    setshowModalCategory(!showModalCategory);
  };

  const handleOpenModalAddCategory = () => {
    setModalTitle("Add");
    toggleModalCategory();
  };

  return (
    <>
      <article className="mx-auto w-4/5 flex my-3">
        <button
          onClick={handleOpenModalAddCategory}
          className="inline-flex items-center ml-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
        >
          <FontAwesomeIcon icon={faPlus} className="h-5 w-5 mr-2" />
          Add Category
        </button>
      </article>
      <CategoryTable
        toggleModalCategory={toggleModalCategory}
        setModalTitle={setModalTitle}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {showModalCategory && (
        <ModalFormCategory
          toggleModalCategory={toggleModalCategory}
          title={modalTitle}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </>
  );
}
