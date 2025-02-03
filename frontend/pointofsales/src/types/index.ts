export type MenuProps = {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  stock: number;
  image: string;
};

export type OrderItemProps = MenuProps & {
  quantity: number;
};

export type CategoryProps = {
  id: number;
  name: string;
  totalRelatedProducts: number;
};
