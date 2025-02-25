"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goOrder = () => {
    router.push("/order");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <div className="space-y-6 mt-8">
          <h2 className="text-3xl font-semibold text-gray-700">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              onClick={goBack}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={goOrder}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
            >
              Go Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
