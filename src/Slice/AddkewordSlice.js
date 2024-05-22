import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const keywordSlice = createSlice({
  name: "Keywords",
  initialState: [],
  reducers: {
    addkeyword: (state, action) => {
      const newKeyword = action.payload;

      if (!state.includes(newKeyword)) {
        state.push(newKeyword);
        toast.success("keyword added");
      } else {
        toast.error("keyword is already present");
      }
    },
    removekeyword: (state, action) => {
      const indexToRemove = action.payload;
      state.splice(indexToRemove, 1);
      toast.success("keyword is deleted");
    },
  },
});

export const { addkeyword, removekeyword } = keywordSlice.actions;

export default keywordSlice.reducer;
