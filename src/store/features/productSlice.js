import { createSlice } from "@reduxjs/toolkit";

const localProductList = localStorage.getItem("productList")
  ? JSON.parse(localStorage.getItem("productList"))
  : [];

const initialState = {
  ProductList: localProductList,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.ProductList = action.payload;
      localStorage.setItem("productList", JSON.stringify(state.ProductList));
    },
    setCart: (state, action) => {
      state.Cart.map((item) => {
        if (item.id === action.payload.id) {
          state.itemQuantity.push({ id: action.payload.item.id, quantity: 1 });
        }
      });
      state.Cart.push(action.payload);
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
