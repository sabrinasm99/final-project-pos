"use client";

import { CategoryProps, MenuProps } from "@/types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useListCategories } from "@/api/categories/useListCategories";
import { addProduct } from "@/api/products/addProduct";
import { updateProduct } from "@/api/products/updateProduct";
import { KeyedMutator } from "swr";
import Swal from "sweetalert2";

type FormMenuProps = {
  title: string;
  selectedMenu: MenuProps | null;
  handleCloseModal: () => void;
  mutateListProducts: KeyedMutator<MenuProps[]>;
};

export default function FormMenu({
  title,
  selectedMenu,
  handleCloseModal,
  mutateListProducts,
}: FormMenuProps) {
  const { categories } = useListCategories();

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    price: yup
      .mixed()
      .transform((value) => (value === "" ? "" : Number(value)))
      .test("is-number", "Price is required", (value): value is number => {
        if (value === "") return false;
        return !isNaN(Number(value));
      })
      .required("Price is required"),
    categoryId: yup
      .mixed()
      .transform((value) => (value === "" ? "" : Number(value)))
      .test("is-number", "Category is required", (value): value is number => {
        if (value === "") return false;
        return !isNaN(Number(value));
      })
      .required("Category is required"),
    stock: yup
      .mixed()
      .transform((value) => (value === "" ? "" : Number(value)))
      .test("is-number", "Stock is required", (value): value is number => {
        if (value === "") return false;
        return !isNaN(Number(value));
      })
      .required("Stock is required"),
    image: yup.string().required("Image is required"),
  });

  type MenuData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: selectedMenu ? selectedMenu.name : "",
      price: selectedMenu ? selectedMenu.price : "",
      categoryId: selectedMenu ? selectedMenu.category.id : "",
      stock: selectedMenu ? selectedMenu.stock : "",
      image: selectedMenu ? selectedMenu.image : "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: MenuData) => {
    try {
      if (title === "Add") {
        await addProduct(data);
      } else {
        await updateProduct(selectedMenu?.id, data);
      }
      mutateListProducts();
      Swal.fire({
        title: "Success",
        icon: "success",
        text: `The menu was successfully ${
          title === "Add" ? "added" : "updated"
        }.`,
      });
    } catch (err) {
      throw err;
    }
    handleCloseModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-3">
      <label className="block font-medium">Name</label>
      <article>
        <input
          {...register("name")}
          placeholder="Enter your menu name"
          className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm italic text-red-600">{errors.name?.message}</p>
      </article>
      <label className="block font-medium">Price</label>
      <article>
        <input
          {...register("price")}
          placeholder="Enter your menu price"
          type="number"
          step="0.01"
          className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm italic text-red-600">{errors.price?.message}</p>
      </article>
      <label className="block font-medium">Category</label>
      <article>
        <select
          {...register("categoryId")}
          className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
        >
          {title === "Add" && <option value=""></option>}
          {categories &&
            categories.map((category: CategoryProps) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
        </select>
        <p className="text-sm italic text-red-600">
          {errors.categoryId?.message}
        </p>
      </article>
      <label className="block font-medium">Stock</label>
      <article>
        <input
          {...register("stock")}
          placeholder="Enter your menu stock"
          type="number"
          className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm italic text-red-600">{errors.stock?.message}</p>
      </article>
      <label className="block font-medium">Image</label>
      <article>
        <input
          {...register("image")}
          placeholder="Enter your menu image url"
          className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm italic text-red-600">{errors.image?.message}</p>
      </article>
      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 transition-colors text-white font-medium p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
