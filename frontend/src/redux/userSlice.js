import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  image: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      //   state.user = action.payload.data;
      state._id = action?.payload?.user?._id;
      state.name = action?.payload?.user?.name;
      state.email = action?.payload?.user?.email;
      state.image = action?.payload?.user?.image;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
