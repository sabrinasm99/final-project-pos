export type MenuProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

export type OrderItemProps = MenuProps & {
  quantity: number;
};
