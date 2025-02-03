import NavigationButton from "@/components/NavigationButton";
import TransactionListTable from "@/components/TransactionListTable";

export default function TransactionPage() {
  return (
    <main className="h-full flex flex-col">
      <article className="bg-gray-100 h-16 flex items-center flex-none">
        <article className="flex items-center w-4/5 mx-auto">
          <NavigationButton />
          <h1 className="ml-2 font-medium text-2xl text-red-500">
            Transaction History
          </h1>
        </article>
      </article>
      <TransactionListTable />;
    </main>
  );
}
