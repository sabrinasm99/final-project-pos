"use client";

import { OrderItemProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

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
      const stock = action.payload.stock;
      const existingItem = state.dataOrder.find((item) => item.id === id);

      if (existingItem) {
        state.dataOrder.forEach((item) => {
          if (item.id === id && item.quantity < stock) {
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
    clear: (state) => {
      state.dataOrder = [];
    },
  },
});

export const { addItem, reduceItem, deleteItem, clear } = orderSlice.actions;
export default orderSlice.reducer;
