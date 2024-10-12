import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialStateCart = [
  {
    id: 0,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    name: "Hello",
    price: 0,
  },
];

const cartReducer = createSlice({
  name: "cartItems",
  initialState: initialStateCart,
  reducers: {
    CART_ADD_ITEM: (state, action) => {
      const newItem = {
        id: nanoid(),
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
      };
      state.push(newItem);
    },
    CART_REMOVE_ITEM: (state, action) => {
      return state.filter((items) => items.id != action.payload.id);
    },
    CART_FLASH: () => {
      return [];
    },
  },
});

export const { CART_ADD_ITEM, CART_FLASH, CART_REMOVE_ITEM } = cartReducer.actions;
export default cartReducer.reducer