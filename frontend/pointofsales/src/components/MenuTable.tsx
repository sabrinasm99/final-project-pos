"use client";

import { menuList } from "@/data/MenuList";
import ModalDeleteConfirmation from "@/modals/ModalDeleteConfirmation";
import { MenuProps } from "@/types";
import { currencyFormatter } from "@/utils/formatter";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type MenuTableProps = {
  toggleModalMenu: () => void;
  setModalTitle: React.Dispatch<string>;
  selectedMenu: MenuProps | null;
  setSelectedMenu: React.Dispatch<MenuProps | null>;
};

export default function MenuTable({
  toggleModalMenu,
  setModalTitle,
  selectedMenu,
  setSelectedMenu,
}: MenuTableProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleOpenDeleteConfirmation = (menu: MenuProps) => {
    setSelectedMenu(menu);
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  const handleOpenModalEditMenu = (menu: MenuProps) => {
    setSelectedMenu(menu);
    setModalTitle("Edit");
    toggleModalMenu();
  };

  return (
    <>
      <article className="bg-white rounded-lg shadow w-4/5 mx-auto overflow-auto my-3">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="text-sm text-red-500 border-b border-gray-200 uppercase tracking-wider">
              <th className="text-left py-6 px-4">#</th>
              <th className="text-left py-6 px-4">Name</th>
              <th className="text-left py-6 px-4">Image</th>
              <th className="text-left py-6 px-4">Category</th>
              <th className="text-left py-6 px-4">Price</th>
              <th className="text-left py-6 px-4">Stock</th>
              <th className="text-right py-6 px-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {menuList.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-4">
                  <div className="font-medium text-gray-900">{index + 1}</div>
                </td>
                <td className="p-4">
                  <div className="font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-20 h-20 bg-gray-100 rounded-lg object-contain"
                  />
                </td>
                <td className="p-4">
                  <div className="text-gray-500">{item.category}</div>
                </td>
                <td className="p-4">
                  <div className="text-gray-900">
                    {currencyFormatter(item.price)}
                  </div>
                </td>
                <td className="p-4">
                  <p>{item.stock}</p>
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleOpenModalEditMenu(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <FontAwesomeIcon icon={faPen} className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteConfirmation(item)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
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
        <ModalDeleteConfirmation
          menu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
        />
      )}
    </>
  );
}
