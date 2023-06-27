import { createSlice } from "@reduxjs/toolkit";
import { checkdata } from "../fakeData";

const initialState = checkdata;
const checkSlice = createSlice({
  name: "check",
  initialState,
  reducers: {
    toggleCheck: (state, action) => {

      state[action.payload.id - 1].checked =
        !state[action.payload.id - 1].checked;
    },
    selectAll: (state) => {
      state.forEach((checkItem) => {
        checkItem.checked = true;
      });
    },
    clearAll: (state) => {
      state.forEach((checkItem) => {
        checkItem.checked = false;
      });
    },
  },
});

export default checkSlice.reducer;
export const { toggleCheck, clearAll, selectAll } = checkSlice.actions;
