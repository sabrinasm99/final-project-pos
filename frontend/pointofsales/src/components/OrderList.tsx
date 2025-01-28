"use client";

import { useAppSelector } from "@/store/hook";
import { currencyFormatter } from "@/utils/formatter";
import { useOrderActions } from "@/utils/orderActions";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OrderList() {
  const { dataOrder } = useAppSelector((state) => state.order);
  const { addItemToOrder, reduceItemToOrder, deleteItemToOrder } =
    useOrderActions();

  return (
    <ul className="mt-5 flex flex-col gap-2 overflow-y-auto pr-1 mx-5">
      {dataOrder.length ? (
        dataOrder.map((order, i) => (
          <li
            key={order.id}
            className={`${
              i !== dataOrder.length - 1
                ? "border-b border-gray-300 border-dashed"
                : "border-0"
            } flex pb-2`}
          >
            <img
              src={order.image}
              alt={order.name}
              className="bg-gray-100 w-24 h-24 object-contain rounded-lg "
            />
            <article className="ml-2 grow flex flex-col">
              <p className="font-medium">{order.name}</p>
              <p className="text-gray-500">{currencyFormatter(order.price)}</p>
              <article className="flex items-center justify-between mt-auto text-sm">
                <FontAwesomeIcon
                  onClick={() => deleteItemToOrder(order)}
                  icon={faTrashCan}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                />
                <article className="flex items-center bg-gray-100 rounded-3xl p-2">
                  <FontAwesomeIcon
                    onClick={() => reduceItemToOrder(order)}
                    icon={faMinus}
                    className="bg-white rounded-full p-1 cursor-pointer"
                  />
                  <p className="mx-2 font-medium">{order.quantity}</p>
                  <FontAwesomeIcon
                    onClick={() => addItemToOrder(order)}
                    icon={faPlus}
                    className="bg-white rounded-full p-1 cursor-pointer"
                  />
                </article>
              </article>
            </article>
          </li>
        ))
      ) : (
        <p>No orders yet</p>
      )}
    </ul>
  );
}
