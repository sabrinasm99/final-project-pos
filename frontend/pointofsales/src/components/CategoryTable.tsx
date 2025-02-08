import ModalDeleteCategory from "@/modals/ModalDeleteCategory";
import { CategoryProps } from "@/types";
import { faEye, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { KeyedMutator } from "swr";

type CategoryTableProps = {
  toggleModalCategory: () => void;
  setModalTitle: React.Dispatch<string>;
  selectedCategory: CategoryProps | null;
  setSelectedCategory: React.Dispatch<CategoryProps | null>;
  categories: CategoryProps[];
  isError: Error | null;
  isLoading: boolean;
  mutateListCategories: KeyedMutator<CategoryProps[]>;
};

export default function CategoryTable({
  toggleModalCategory,
  setModalTitle,
  selectedCategory,
  setSelectedCategory,
  categories,
  isLoading,
  isError,
  mutateListCategories,
}: CategoryTableProps) {
  const router = useRouter();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleOpenModalEditCategory = (category: CategoryProps) => {
    setSelectedCategory(category);
    setModalTitle("Edit");
    toggleModalCategory();
  };

  const handleOpenDeleteConfirmation = (category: CategoryProps) => {
    setSelectedCategory(category);
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  if (isLoading) {
    return (
      <article className="flex justify-center">
        <ClipLoader size={50} />
      </article>
    );
  }

  if (isError) {
    return (
      <article className="flex justify-center">
        <p className="text-gray-700">An error has been occured</p>
      </article>
    );
  }

  return (
    <>
      <article className="bg-white rounded-lg shadow w-4/5 mx-auto overflow-auto my-3">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="text-sm text-left text-red-500 border-b border-gray-200 uppercase tracking-wider">
              <th className="py-6 px-4">#</th>
              <th className="py-6 px-4">ID</th>
              <th className="py-6 px-4">Name</th>
              <th className="py-6 px-4">Total Related Products</th>
              <th className="py-6 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categories.map((category: CategoryProps, index: number) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{category.id}</td>
                <td className="p-4">{category.name}</td>
                <td className="p-4">{category.totalRelatedProducts}</td>
                <td className="p-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => router.push(`/category/${category.id}`)}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                      title="View details"
                    >
                      <FontAwesomeIcon icon={faEye} className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleOpenModalEditCategory(category)}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                      title="Edit category"
                    >
                      <FontAwesomeIcon icon={faPen} className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteConfirmation(category)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                      title="Delete category"
                    >
                      <FontAwesomeIcon icon={faTrashCan} className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      {showDeleteConfirmation && (
        <ModalDeleteCategory
          category={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          mutateListCategories={mutateListCategories}
        />
      )}
    </>
  );
}
