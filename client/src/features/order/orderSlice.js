import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrders, addOrder, deleteOrder } from "./orderApi";

export const fetchAllOrders = createAsyncThunk('order/fetchAllOrders', async () => {
    const response = await fetchOrders();
    return response;
});

export const deleteOrderToShow = createAsyncThunk('order/deleteOrderToShow',
    async (id) => {
        await deleteOrder(id);
        return id;
    }
);

export const addNewOrder = createAsyncThunk('order/addNewOrder', async (order) => {
    const response = await addOrder(order);
    return response;
});

const orderSlice = createSlice({
    name: 'order',
    initialState: { arrOrders: [], shoppingCart: [] },
    reducers: {
        deleteAllShoppingCart: (state) => { state.shoppingCart = []; },
        deleteFromShoppingCart: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload);
        },
        addToShoppingCart: (state, action) => {
            const itemIndex = state.shoppingCart.findIndex(item => item.id === action.payload.id);
            if (itemIndex > -1) {
                state.shoppingCart[itemIndex].count += action.payload.count;
            } else {
                state.shoppingCart.push(action.payload);
            }
        },
        reduceFromShoppingCart: (state, action) => {
            const itemIndex = state.shoppingCart.findIndex(item => item.id === action.payload);
            if (itemIndex > -1 && state.shoppingCart[itemIndex].count > 1) {
                state.shoppingCart[itemIndex].count -= 1;
            } else {
                state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllOrders.fulfilled, (state, action) => {
                state.arrOrders = action.payload;
            })
            .addCase(deleteOrderToShow.fulfilled, (state, action) => {
                state.arrOrders = state.arrOrders.filter(order => order.id !== action.payload);
            })
            .addCase(addNewOrder.fulfilled, (state, action) => {
                state.arrOrders.push(action.payload);
            });
    }
});

export const { deleteAllShoppingCart, deleteFromShoppingCart, addToShoppingCart, reduceFromShoppingCart } = orderSlice.actions;
export default orderSlice.reducer;