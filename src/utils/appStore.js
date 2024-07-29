import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"; // Import the new config slice

const appStore =configureStore({

    reducer :{
       user :userReducer,
       movies:moviesReducer,
       gpt:gptReducer,
       config: configReducer, // Add the config slice to the store
    },
});

export default appStore;