import { deleteCategory } from "@/api/categories/deleteCategory";
import { CategoryProps } from "@/types";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import React from "react";
import { KeyedMutator } from "swr";

type ModalDeleteCategoryProps = {
  category: CategoryProps | null;
  setSelectedCategory: React.Dispatch<CategoryProps | null>;
  setShowDeleteConfirmation: React.Dispatch<boolean>;
  mutateListCategories: KeyedMutator<CategoryProps[]>;
};

export default function ModalDeleteCategory({
  category,
  setSelectedCategory,
  setShowDeleteConfirmation,
  mutateListCategories,
}: ModalDeleteCategoryProps) {
  const handleCloseDeleteCategory = () => {
    setSelectedCategory(null);
    setShowDeleteConfirmation(false);
  };

  const handleDeleteCategory = async (id: any) => {
    try {
      await deleteCategory(id);
      mutateListCategories();
    } catch (error: any) {
      if (error.error) {
        return toast("Category can't be deleted");
      }
      throw error;
    }
    handleCloseDeleteCategory();
  };

  return (
    <>
      <div className="fixed rounded-md py-3 z-20 bg-white top-50% left-50% -translate-x-50% -translate-y-50% shadow-modal w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <div className="border-b border-gray-300 px-3 pb-3 sm:pb-5 flex">
          <h1 className="text-xl font-medium text-gray-700">
            Delete Confirmation
          </h1>
          <div className="ml-auto flex items-center">
            <FontAwesomeIcon
              icon={faXmark}
              className="text-gray-500 hover:text-gray-600 cursor-pointer"
              onClick={handleCloseDeleteCategory}
            />
          </div>
        </div>
        <div className="px-3 py-5">
          <p className="bg-red-100 text-red-700 rounded-md p-2">
            Are you sure you want to delete the category{" "}
            <strong>{category?.name}</strong>?
          </p>
        </div>
        <div className="border-t border-gray-300 flex pt-2 px-3">
          <button
            onClick={handleCloseDeleteCategory}
            className="text-red-500 mr-3 ml-auto hover:bg-gray-100 rounded-md py-1 px-2 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDeleteCategory(category?.id)}
            className="bg-red-500 hover:bg-red-600 text-white rounded-md py-1 px-2 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
      <div
        // onClick={() => setShowDeleteConfirmation(false)}
        className="fixed z-10 top-0 left-0 h-full w-full bg-backdrop"
      />
    </>
  );
}
