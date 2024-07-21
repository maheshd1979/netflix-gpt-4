import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice(
    {
          name:"user",
          initialState:null,
          reducers:{
            addUser :(state,action)=>{
                // mutating the state here
                  return action.payload;
            },
            removeUser:(state,action)=>{
               // state.items.pop(action.payload);
                return null;
            },         
          },
    }
);

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;