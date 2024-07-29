import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { visible: false },
  reducers: {
    toggleSearch: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggleSearch } = gptSlice.actions;
export default gptSlice.reducer;
