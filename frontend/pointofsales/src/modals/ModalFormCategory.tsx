"use client";

import FormCategory from "@/components/FormCategory";
import { CategoryProps } from "@/types";
import React from "react";

type ModalFormCategoryProps = {
  toggleModalCategory: () => void;
  title: string;
  selectedCategory: CategoryProps | null;
  setSelectedCategory: React.Dispatch<CategoryProps | null>;
};

export default function ModalFormCategory({
  toggleModalCategory,
  title,
  selectedCategory,
  setSelectedCategory,
}: ModalFormCategoryProps) {
  const handleCloseModal = () => {
    if (title === "Edit") {
      setSelectedCategory(null);
    }
    toggleModalCategory();
  };

  return (
    <>
      <main className="fixed rounded-md z-20 p-6 bg-white top-50% left-50% -translate-x-50% -translate-y-50% shadow-md w-1/4 max-h-4/5 overflow-y-auto">
        <h2 className="text-2xl font-medium">{title} Category</h2>
        <FormCategory title={title} selectedCategory={selectedCategory} />
      </main>
      <div
        onClick={handleCloseModal}
        className="fixed z-10 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
