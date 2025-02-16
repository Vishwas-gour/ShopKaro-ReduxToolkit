
import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";
const Slice = createSlice({
  name: "cartSlice",
  initialState: {
    cards: [],
    currentUser: {}
  },
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.currentUser === null) {
        alert("Please login first");
        return;
      }
      let data = state.cards.find(card => card.id === payload.id);
      if (data) {
        alert("Product is already in cart")
      }
      else {
        state.cards.push(payload)

      }
    },
    removeFromCart: (state, { payload }) => {
      state.cards = state.cards.filter((item) => (payload != item.id));
    },
    removeAllFromCart: (state) => {
        state.cards.length = 0;
    },
    increQuantity: (state, { payload }) => {
      if (state.cards[payload].quantity == 10) alert("Max limit 10")
      else state.cards[payload].quantity += 1;
    },
    decreQuantity: (state, { payload }) => {
      if (state.cards[payload].quantity == 1) {
        if (confirm("only one item left do you want to remove")) {
          state.cards.splice(payload, 1)
        }
      }
      else state.cards[payload].quantity -= 1;
    },
    currentUserInfo: (state, { payload }) => {
      state.currentUser = payload;
    }
  }
});
export const { addToCart, removeFromCart, increQuantity, decreQuantity, currentUserInfo, removeAllFromCart } = Slice.actions;
export default Slice.reducer;