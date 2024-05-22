import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../Slice/ProductSlice";
import cartReducer from "../Slice/AddtoCartSlice";
import userReducer from "../Slice/userSlice";
import countryreducer from "../Slice/countrySlice";
import keywordreducer from "../Slice/AddkewordSlice";
 
export const store = configureStore({
  reducer: {
    Products: ProductReducer,
    cartitems: cartReducer,
    users: userReducer,
    Countries:countryreducer,
    Keywords : keywordreducer,

  },
});
