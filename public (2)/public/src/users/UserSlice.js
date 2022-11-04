import { createSlice } from "@reduxjs/toolkit";
import UserData from "./FakeData.json";

const userSlice = createSlice({
  name: "users",
  initialState: UserData,
  reducers: {
    addUser: (state, { payload }) => [...state, payload],

    editUser: (state, { payload }) => {
      const users = [...state];
      return users.map((user) => {
        if (user.id == payload.id) {
          user.name = payload.name;
        }
      });
    },

    removeUser: (state, { payload }) => {
      const users = [...state];
      // return users.filter((u) => u.id != payload);

      users.map((user) => {
        if (user.id == payload.id) {
          user.status = payload.status;
        }
      });
    },

    restoreUser: (state, { payload }) => {
      const users = [...state];
      // return users.filter((u) => u.id != payload);

      users.map((user) => {
        if (user.id == payload.id) {
          user.status = payload.status;
        }
      });
    },
  },
});

export const { addUser, removeUser, editUser, restoreUser } = userSlice.actions;
export const selectUsers = (state) => state.users.UserData;
export default userSlice.reducer;
