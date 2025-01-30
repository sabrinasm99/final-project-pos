import NavigationButton from "@/components/NavigationButton";
import OrderItemsListTable from "@/components/OrderItemsListTable";
import PaymentSummary from "@/components/PaymentSummary";

export default function PaymentPage() {
  return (
    <main className="h-full">
      <article className="bg-gray-100 h-16 sticky top-0 z-10 flex items-center">
        <article className="flex items-center w-4/5 mx-auto">
          <NavigationButton />
          <p className="ml-2 font-medium text-2xl text-red-500">
            Order Details
          </p>
        </article>
      </article>

      <article className="py-3 flex gap-5 w-4/5 mx-auto">
        <section className="w-2/3">
          <OrderItemsListTable />
        </section>

        <section className="w-1/3">
          <PaymentSummary />
        </section>
      </article>
    </main>
  );
}
