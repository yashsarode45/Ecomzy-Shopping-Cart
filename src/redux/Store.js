import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";


export const Store = configureStore({
    reducer: {
        cart : cartSlice,
         
    }
})