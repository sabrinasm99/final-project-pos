import { useAppDispatch } from "@/store/hook";
import { addItem, deleteItem, reduceItem } from "@/store/slices/orderSlice";
import { MenuDataProps } from "@/types";

export const useOrderActions = () => {
  const dispatch = useAppDispatch();

  const addItemToOrder = (menu: MenuDataProps) => {
    dispatch(addItem(menu));
  };

  const reduceItemToOrder = (menu: MenuDataProps) => {
    dispatch(reduceItem(menu));
  };

  const deleteItemToOrder = (menu: MenuDataProps) => {
    dispatch(deleteItem(menu));
  };

  return {
    addItemToOrder,
    reduceItemToOrder,
    deleteItemToOrder,
  };
};
