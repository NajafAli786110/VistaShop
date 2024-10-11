import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "Hello",
    price: 0,
  },
];

const cartReducer = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    CART_ADD_ITEM: (state, action) => {
      const newItem = {
        id: nanoid(),
        name: action.payload.name,
        price: action.payload.price,
      };
      state.push(newItem);
    },
    CART_REMOVE_ITEM: (state, action) => {
      state.filter((items) => items.id != action.payload.id);
    },
    CART_FLASH: () => {
      return [];
    },
  },
});

export const { CART_ADD_ITEM, CART_FLASH, CART_REMOVE_ITEM } = cartReducer.actions;
export default cartReducer.reducer