import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();  
    return data;
});

const ProductSlice = createSlice({
  name: "Products",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
   
    },
    
    removefromproducts: (state, action) => {
      const idToRemove = action.payload;
      const indexToRemove = state.data.findIndex(item => item.id === idToRemove);
      
      if (indexToRemove !== -1) {
        state.data.splice(indexToRemove, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload; // Assuming action.payload contains the array of products
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log("Error fetching products:", action.error);
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const {addProduct,removefromproducts} = ProductSlice.actions;
export default ProductSlice.reducer;
