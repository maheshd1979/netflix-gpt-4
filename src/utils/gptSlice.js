import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { visible: false ,
   // gptMovies:null,
    movieNames:null,
    movieResults:null
  },

  reducers: {
    toggleSearch: (state) => {
      state.visible = !state.visible;
    },
    addGptMoviesResult:(state,action) =>{
      const {movieNames,movieResults}=action.payload;
      state.movieNames=movieNames;
      state.movieResults=movieResults;
    },
  },
});

export const { toggleSearch,addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
