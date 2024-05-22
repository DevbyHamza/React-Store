import { createSlice } from "@reduxjs/toolkit";
 
const cartSlice = createSlice({
  name: "cartitems",
  initialState: [],
  reducers: {
    addtocart: (state, action) => {
      const { id, quantity } = action.payload;

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ ...action.payload });
      }
  
    },
    removefromcart: (state, action) => {
      const productIdToRemove = action.payload;
      const updatedCart = state.filter((item) => item.id !== productIdToRemove);
      return updatedCart;
    },
    updateCartItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.find((item) => item.id === productId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addtocart, updateCartItemQuantity, removefromcart } =
  cartSlice.actions;

export default cartSlice.reducer;
