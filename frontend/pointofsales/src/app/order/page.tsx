import ListMenu from "@/components/ListMenu";
import MenuCard from "@/components/MenuCard";
import NavigationButton from "@/components/NavigationButton";
import OrderList from "@/components/OrderList";
import OrderSummary from "@/components/OrderSummary";
import { menuList } from "@/data/MenuList";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OrderPage() {
  return (
    <main className="flex h-full">
      <section className="w-2/3 px-5 pt-5 flex flex-col">
        <article className="flex items-center">
          <NavigationButton />
          <p className="ml-2 font-medium text-2xl text-red-500">Order</p>
        </article>
        <ul className="flex flex-none rounded gap-2 mt-3 py-2 overflow-x-auto font-medium">
          <li className="p-2 cursor-pointer border-2 border-red-500 rounded-lg text-red-500 bg-white flex-none w-32">
            <p>All Menu</p>
          </li>
          <li className="p-2 cursor-pointer border-2 border-white rounded-lg text-red-500 bg-white flex-none w-32">
            <p>Burger</p>
          </li>
          <li className="p-2 cursor-pointer border-2 border-white rounded-lg text-red-500 bg-white flex-none w-32">
            <p>Beverage</p>
          </li>
          <li className="p-2 cursor-pointer border-2 border-white rounded-lg text-red-500 bg-white flex-none w-32">
            <p>Snack</p>
          </li>
          <li className="p-2 cursor-pointer border-2 border-white rounded-lg text-red-500 bg-white flex-none w-32">
            <p>Dessert</p>
          </li>
        </ul>
        <article className="my-3 flex">
          <select className="rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
            <option>Sort by</option>
            <option value="Sort by name (A-Z)">Sort by name (A-Z)</option>
            <option value="Sort by name (Z-A)">Sort by name (Z-A)</option>
            <option value="Sort by price (Highest-Lowest)">
              Sort by price (Highest-Lowest)
            </option>
            <option value="Sort by price (Lowest-Highest)">
              Sort by price (Lowest-Highest)
            </option>
          </select>
          <article className="relative grow">
            <input
              type="text"
              placeholder="Search menu by name"
              className="w-full ml-2 pr-10 pl-4 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <article className="absolute top-0 right-0 h-full flex items-center rounded-full">
              <article className="bg-gray-100 rounded-full p-2 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-800"
                />
              </article>
            </article>
          </article>
        </article>
        <ListMenu />
      </section>
      <section className="w-1/3 bg-white pt-5 flex flex-col">
        <h2 className="text-xl font-medium mx-5">Order List</h2>
        <OrderList />
        <OrderSummary />
      </section>
    </main>
  );
}
