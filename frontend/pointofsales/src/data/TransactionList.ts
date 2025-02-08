type OrderItemProps = {
  item: any;
  quantity: number;
};

export type TransactionProps = {
  id: string;
  orderDate: string;
  orderTime: string;
  totalPrice: number;
  orderItems: OrderItemProps[];
};

export const transactionList: TransactionProps[] = [
  {
    id: "679c29680ab708bfb5824f27",
    orderDate: "Jan 27, 2025",
    orderTime: "12:08 PM",
    totalPrice: 14,
    orderItems: [
      {
        item: {
          id: 1,
          name: "Chicken Burger",
          price: 4.5,
          category: "Burger",
          image:
            "https://websitedemos.net/fast-food-04/wp-content/uploads/sites/792/2021/03/burger-06-free-img.png",
          stock: 8,
        },
        quantity: 2,
      },
      {
        item: {
          id: 5,
          name: "Chocolate Milkshake",
          price: 3,
          category: "Beverage",
          image:
            "https://websitedemos.net/food-truck-04/wp-content/uploads/sites/719/2020/10/product-002-free-img.png",
          stock: 9,
        },
        quantity: 1,
      },
      {
        item: {
          id: 7,
          name: "Ice Cola",
          price: 2,
          category: "Beverage",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/045/057/999/small_2x/close-up-of-cold-iced-cola-drink-in-glass-png.png",
          stock: 4,
        },
        quantity: 1,
      },
    ],
  },
  {
    id: "679c29eadf1a016af2df6d57",
    orderDate: "Jan 27, 2025",
    totalPrice: 10.5,
    orderItems: [
      {
        item: {
          id: 6,
          name: "Chocolate Ice Cream",
          price: 3.5,
          category: "Dessert",
          image:
            "https://websitedemos.net/food-truck-04/wp-content/uploads/sites/719/2020/10/product-003-free-img.png",
          stock: 1,
        },
        quantity: 3,
      },
    ],
    orderTime: "12:39 PM",
  },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 28, 2025",
  //   totalPrice: 23.5,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 28, 2025",
  //   totalPrice: 6.5,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 28, 2025",
  //   totalPrice: 7.5,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 29, 2025",
  //   totalPrice: 11.5,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 29, 2025",
  //   totalPrice: 21,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 29, 2025",
  //   totalPrice: 8.5,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 30, 2025",
  //   totalPrice: 10,
  // },
  // {
  //   id: new ObjectID().toString(),
  //   orderDate: "Jan 30, 2025",
  //   totalPrice: 13,
  // },
];
