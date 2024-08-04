import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: 'idle',
  error: null
};

// Corrected spelling for `fetchProducts`
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (store) => {
        store.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (store, action) => {
        store.status = "success"; // Fixed typo here
        store.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (store, action) => {
        store.status = "failed";
        store.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
