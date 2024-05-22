import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:{},
  reducers: {
    loginSuccess: (state, action) => {
      // Update state with the logged-in user data
      state.username = action.payload; // Add user data to the state array
    },
    logout: (state) => {
        return {}; // Reset the user state to null
      },
  },
});

export const { loginSuccess,logout } = userSlice.actions;

export default userSlice.reducer;
