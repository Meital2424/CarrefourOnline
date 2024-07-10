import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "./productApi";

const initialState = {
    arrProduct: [],
    cart: [],
};

export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProduct',
    async (_, thunkAPI) => {
        const res = await fetchProducts();
        return res;
    }
);

export const addNewProduct = createAsyncThunk(
    'product/addNewProduct',
    async (product, thunkAPI) => {
        const res = await addProduct(product);
        return res;
    }
);

export const deleteProductToShow = createAsyncThunk(
    'product/deleteProductToShow',
    async ({ id }, thunkAPI) => {
        const res = await deleteProduct(id);
        return id;
    }
);

export const updateProductToShow = createAsyncThunk(
    'product/updateProductToShow',
    async ({ product, id }, thunkAPI) => {
        const res = await updateProduct(product, id);
        return { ...res, id };
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
                state.arrProduct = payload;
            })
            .addCase(addNewProduct.fulfilled, (state, { payload }) => {
                state.arrProduct.push(payload);
            })
            .addCase(deleteProductToShow.fulfilled, (state, { payload }) => {
                state.arrProduct = state.arrProduct.filter(product => product.id !== payload);
            })
            .addCase(updateProductToShow.fulfilled, (state, { payload }) => {
                const index = state.arrProduct.findIndex(product => product.id === payload.id);
                if (index !== -1) {
                    state.arrProduct[index] = payload;
                }
            });
    }
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;