import NavigationButton from "@/components/NavigationButton";
import TransactionDetailsContent from "@/components/TransactionDetailsContent";

export default function TransactionDetailsPage() {
  return (
    <main className="h-full flex flex-col">
      <article className="bg-gray-100 h-16 flex items-center flex-none sticky top-0">
        <article className="flex items-center w-4/5 mx-auto">
          <NavigationButton />
          <h1 className="ml-2 font-medium text-2xl text-red-500">
            Transaction History
          </h1>
        </article>
      </article>
      <TransactionDetailsContent />
    </main>
  );
}
