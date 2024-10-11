import { createSlice, nanoid } from "@reduxjs/toolkit";
import { ProductList } from "../data/ProductLists";

const productReducer = createSlice({
  name: "products",
  initialState: ProductList,
  reducers: {
    PRODUCT_ADD_ITEM: (state, action) => {
      const newProduct = {
        ...state,
        id: nanoid(),
        name: action.payload.name,
        image: action.payload.image,
        description: action.payload.description,
      };
      state.push(newProduct);
    },
    PRODUCT_REMOVE_ITEM: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
  },
});

export const { PRODUCT_ADD_ITEM, PRODUCT_REMOVE_ITEM } = productReducer.actions;
export default productReducer.reducer;
