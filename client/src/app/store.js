import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/order/orderSlice";
import productSlice from '../features/product/productSlice'
import userSlice from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        user: userSlice,
        order: orderSlice

    }
})