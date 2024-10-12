import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedCartItems = localStorage.getItem("initialStateCart");
  if (savedCartItems) {
    return JSON.parse(savedCartItems);
  } else {
    return [
      {
        id: 0,
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        name: "Hello",
        price: 0,
      },
    ];
  }
};

export const initialStateCart = loadFromLocalStorage();

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

      localStorage.setItem("initialStateCart", JSON.stringify(state));
    },
    CART_REMOVE_ITEM: (state, action) => {
      const updatedState = state.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("initialStateCart", JSON.stringify(updatedState));
      return updatedState;
    },
    CART_FLASH: (state) => {
      localStorage.setItem("initialStateCart", JSON.stringify([]));
      return [];
    },
  },
});

export const { CART_ADD_ITEM, CART_FLASH, CART_REMOVE_ITEM } =
  cartReducer.actions;
export default cartReducer.reducer;
