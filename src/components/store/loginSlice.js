import { createSlice, isAction } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    username: "",
  },
  reducers: {
    loginData: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { loginData } = loginSlice.actions;
export default loginSlice.reducer;
