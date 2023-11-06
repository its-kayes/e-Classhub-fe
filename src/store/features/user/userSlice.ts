import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../../../interface/index.global";

const initialState: IUserInfo = {
  email: "",
  name: "",
  type: "student",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUserInfo>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.type = action.payload.type;
      state.id = action.payload.id;
    },
    updateNameTitle: (state, action: PayloadAction<IUserInfo>) => {
      state.name = action.payload.name;
      state.title = action.payload.title;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateNameTitle } = userSlice.actions;

export default userSlice.reducer;
