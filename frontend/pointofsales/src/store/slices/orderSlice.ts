"use client";

import { createSlice } from "@reduxjs/toolkit";

type OrderItemProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
};

type InitialStateProps = {
  dataOrder: OrderItemProps[];
};

const initialState: InitialStateProps = {
  dataOrder: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.dataOrder.find((item) => item.id === id);

      if (existingItem) {
        state.dataOrder.forEach((item) => {
          if (item.id === id) {
            item.quantity += 1;
          }
        });
      } else {
        state.dataOrder.push({ ...action.payload, quantity: 1 });
      }
    },
    reduceItem: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.dataOrder.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.dataOrder = state.dataOrder.filter((item) => item.id !== id);
        } else {
          state.dataOrder.forEach((item) => {
            if (item.id === id) {
              item.quantity -= 1;
            }
          });
        }
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload.id;
      state.dataOrder = state.dataOrder.filter((item) => item.id !== id);
    },
  },
});

export const { addItem, reduceItem, deleteItem } = orderSlice.actions;
export default orderSlice.reducer;
