"use client";

import { useCategory } from "@/api/categories/useCategory";
import {
  faArrowLeft,
  faCube,
  faHashtag,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export default function CategoryDetailsContent() {
  const router = useRouter();
  const { id } = useParams();
  const { category, isError, isLoading } = useCategory(id);

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
    <article className="w-4/5 mx-auto px-8">
      <button
        onClick={() => router.push("/category")}
        className="my-3 inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to Categories
      </button>

      <article className="bg-white rounded-lg shadow overflow-auto my-3">
        <article className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Category Details</h1>
        </article>

        <ul className="p-6 space-y-6">
          <li className="flex space-x-4">
            <article className="flex items-center">
              <article className="p-2 bg-gray-100 rounded-lg">
                <FontAwesomeIcon icon={faHashtag} className="text-gray-500" />
              </article>
            </article>
            <article>
              <h3 className="text-sm font-medium text-gray-500">Category ID</h3>
              <p className="mt-1 font-semibold text-gray-900">{category?.id}</p>
            </article>
          </li>

          <li className="flex space-x-4">
            <article className="flex items-center">
              <article className="p-2 bg-gray-100 rounded-lg">
                <FontAwesomeIcon icon={faTag} className="text-gray-500" />
              </article>
            </article>
            <article>
              <h3 className="text-sm font-medium text-gray-500">
                Category Name
              </h3>
              <p className="mt-1 font-semibold text-gray-900">
                {category?.name}
              </p>
            </article>
          </li>

          <li className="flex space-x-4">
            <article className="flex items-center">
              <article className="p-2 bg-gray-100 rounded-lg">
                <FontAwesomeIcon icon={faCube} className="text-gray-500" />
              </article>
            </article>
            <article>
              <h3 className="text-sm font-medium text-gray-500">
                Total Related Products
              </h3>
              <p className="mt-1 font-semibold text-gray-900">
                {category?.totalRelatedProducts.toLocaleString()} products
              </p>
            </article>
          </li>
        </ul>
      </article>
    </article>
  );
}
