import { useAppDispatch } from "@/store/hook";
import { addItem, deleteItem, reduceItem } from "@/store/slices/orderSlice";
import { MenuProps } from "@/types";

export const useOrderActions = () => {
  const dispatch = useAppDispatch();

  const addItemToOrder = (menu: MenuProps) => {
    dispatch(addItem(menu));
  };

  const reduceItemToOrder = (menu: MenuProps) => {
    dispatch(reduceItem(menu));
  };

  const deleteItemToOrder = (menu: MenuProps) => {
    dispatch(deleteItem(menu));
  };

  return {
    addItemToOrder,
    reduceItemToOrder,
    deleteItemToOrder,
  };
};
