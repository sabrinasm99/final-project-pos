export type MenuProps = {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  stock: number;
  image: string;
};

export type CategoryProps = {
  id: number;
  name: string;
};

export type CategoryDataProps = {
  id: number;
  name: string;
};

export type CategoryDataWithRelatedProductsProps = CategoryDataProps & {
  totalRelatedProducts: number;
};

export type MenuDataProps = {
  id: number;
  name: string;
  price: number;
  category: CategoryDataProps;
  stock: number;
  image: string;
};

export type OrderItemProps = MenuDataProps & {
  quantity: number;
};
