import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const fetchAllProducts = createAsyncThunk(
  "prodcts/fetchAll",
  async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = res.json();
    return data;
  }
);

const initialState = {
  products: [],
  productsFromSearch: [],
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  // reducers: {
  //   searchProducts: (state, action) => {
  //     const foundedProducts = state.products.filter(
  //       (prod) => prod.title.includes(action.payload) && action.payload !== ""
  //     );
  //     state.productsFromSearch = foundedProducts;
  //   },
  //   clearSearchProducts: (state) => {
  //     state.productsFromSearch = [];
  //   },
  // },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
  //     state.products = action.payload;
  //   });
  // },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    searchProducts: (state, action) => {
      const foundedProducts = state.products.filter(
        (prod) => prod.title.includes(action.payload) && action.payload !== ""
      );
      state.productsFromSearch = foundedProducts;
    },
    clearSearchProducts: (state) => {
      state.productsFromSearch = [];
    },
  },
  extraReducers: (builder) => {
    // [HYDRATE]: (state, action) => {
    //   return (state = {
    //     ...state,
    //     ...action.payload.products,
    //   });
    // },
    builder.addCase(HYDRATE, (state, action) => {
      return (state = { ...state, ...action.payload.products });
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
export const { setProducts, searchProducts, clearSearchProducts } =
  productsSlice.actions;
