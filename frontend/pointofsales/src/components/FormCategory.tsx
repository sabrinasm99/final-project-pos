"use client";

import { CategoryProps } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type FormMenuProps = {
  title: string;
  selectedCategory: CategoryProps | null;
};

export default function FormCategory({
  title,
  selectedCategory,
}: FormMenuProps) {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
  });

  type CategoryData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryData>({
    defaultValues: {
      name: selectedCategory ? selectedCategory.name : "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CategoryData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-3">
      <label className="block font-medium">Name</label>
      <article>
        <input
          {...register("name")}
          placeholder="Enter your category name"
          className="w-full focus:outline-none border border-gray-200 rounded p-1 focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm italic text-red-600">{errors.name?.message}</p>
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
