import CategoryDetailsContent from "@/components/CategoryDetailsContent";
import NavigationButton from "@/components/NavigationButton";

export default function CategoryDetailsPage() {
  return (
    <main className="h-full flex flex-col">
      <article className="bg-gray-100 h-16 flex items-center flex-none">
        <article className="flex items-center w-4/5 mx-auto">
          <NavigationButton />
          <h1 className="ml-2 font-medium text-2xl text-red-500">Category</h1>
        </article>
      </article>
      <CategoryDetailsContent />
    </main>
  );
}
