import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productReducer';
import cartReducer from './features/cartReducer';



const rootReducer = combineReducers({
    products: productReducer,
    cartItems: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})