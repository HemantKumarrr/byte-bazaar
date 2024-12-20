import { createSlice } from "@reduxjs/toolkit";

const localCartList = localStorage.getItem("cartList")
  ? JSON.parse(localStorage.getItem("cartList"))
  : [];

const localTotalQuantity = localStorage.getItem("totalQuantity")
  ? JSON.parse(localStorage.getItem("totalQuantity"))
  : 0;
const localTotalPrice = localStorage.getItem("totalPrice")
  ? JSON.parse(localStorage.getItem("totalPrice"))
  : 0;

const initialState = {
  cartItems: localCartList, // Array to store items in the cart
  totalQuantity: localTotalQuantity, // Total number of items in the cart
  totalPrice: localTotalPrice, // Total price of the items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
      localStorage.setItem("cartList", JSON.stringify(state.cartItems));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
          localStorage.setItem(
            "totalQuantity",
            JSON.stringify(state.totalQuantity)
          );
        } else {
          // Optionally remove item if quantity reaches zero
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== id
          );
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
          localStorage.setItem(
            "totalQuantity",
            JSON.stringify(state.totalQuantity)
          );
        }
        localStorage.setItem("cartList", JSON.stringify(state.cartItems));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === id
      );

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== id
        );
        localStorage.setItem(
          "totalQuantity",
          JSON.stringify(state.totalQuantity)
        );
      }
      localStorage.setItem("cartList", JSON.stringify(state.cartItems));

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      localStorage.removeItem("totalQuantity");
      localStorage.removeItem("cartList");
      localStorage.removeItem("totalPrice");
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
