import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  user: string; // Replace 'string' with the actual type of 'user'
  // Add other properties as needed
}

interface UserState {
  userInfo: UserInfo;
}

const initialState: UserState = {
  userInfo: {
    user: "", // Initialize 'user' with the appropriate default value
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    updateLoggedInUser: (state, action: PayloadAction<string>) => {
      state.userInfo.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateLoggedInUser } = userSlice.actions;

export default userSlice.reducer;
