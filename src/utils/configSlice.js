import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  language: 'en', // Default language
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = configSlice.actions;
export default configSlice.reducer;
