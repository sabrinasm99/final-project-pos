import ListCategory from "@/components/ListCategory";
import ListMenu from "@/components/ListMenu";
import NavigationButton from "@/components/NavigationButton";
import OrderList from "@/components/OrderList";
import OrderSummary from "@/components/OrderSummary";
import SearchingMenu from "@/components/SearchingMenu";
import SortingMenu from "@/components/SortingMenu";

export default function OrderPage() {
  return (
    <main className="flex h-full">
      <section className="w-1/2 md:w-3/5 lg:w-2/3 px-5 pt-5 flex flex-col">
        <article className="flex items-center">
          <NavigationButton />
          <p className="ml-2 font-medium text-2xl text-red-500">Order</p>
        </article>
        <ListCategory />
        <article className="my-3 flex flex-col lg:flex-row gap-2">
          <SortingMenu />
          <SearchingMenu />
        </article>
        <ListMenu />
      </section>
      <section className="w-1/2 md:w-2/5 lg:w-1/3 bg-white pt-5 flex flex-col">
        <h2 className="text-xl font-medium mx-5">Order List</h2>
        <OrderList />
        <OrderSummary />
      </section>
    </main>
  );
}
