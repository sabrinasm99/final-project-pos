export type CategoryProps = {
  id: number;
  name: string;
  totalRelatedProducts: number;
};

export type MenuProps = {
  id: number;
  name: string;
  price: number;
  category: CategoryProps;
  stock: number;
  image: string;
};

export type OrderItemProps = MenuProps & {
  quantity: number;
};

export type TransactionDetail = {
  product: MenuProps;
  quantity: number;
  subtotal: number;
};

export type TransactionProps = {
  id: string;
  totalAmount: number;
  totalPay: number;
  transactionDetails: TransactionDetail[];
  createdAt: string;
};
