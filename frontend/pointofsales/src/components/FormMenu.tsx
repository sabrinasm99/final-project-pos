"use client";

import { MenuProps } from "@/types";
import { useForm } from "react-hook-form";

type FormMenuProps = {
  title: string;
  selectedMenu: MenuProps | null;
};

export default function FormMenu({ title, selectedMenu }: FormMenuProps) {
  const { register } = useForm({
    defaultValues: {
      name: selectedMenu ? selectedMenu.name : "",
      price: selectedMenu ? selectedMenu.price : "",
      category: selectedMenu ? selectedMenu.category : "Burger",
      image: selectedMenu ? selectedMenu.image : "",
      stock: selectedMenu ? selectedMenu.stock : "",
    },
  });

  return (
    <form className="space-y-4 mt-3">
      <label className="block font-medium">Name</label>
      <input
        {...register("name")}
        placeholder="Enter your menu name"
        className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
      />
      <label className="block font-medium">Price</label>
      <input
        {...register("price")}
        placeholder="Enter your menu price"
        type="number"
        step="0.01"
        className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
      />
      <label className="block font-medium">Category</label>
      <select
        {...register("category")}
        className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
      >
        <option value="Burger">Burger</option>
        <option value="Beverage">Beverage</option>
        <option value="Dessert">Dessert</option>
      </select>
      <label className="block font-medium">Stock</label>
      <input
        {...register("stock")}
        placeholder="Enter your menu stock"
        type="number"
        className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
      />
      <label className="block font-medium">Image</label>
      <input
        {...register("image")}
        placeholder="Enter your menu image url"
        className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white font-medium p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
