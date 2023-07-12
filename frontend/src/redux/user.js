import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name: "user",
  initialState: {
    authenticated: false,
    baseUrl: "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs",
    formNo: 0
  },
  reducers: {
    setAuthenticated: (state, action) => {
        state.authenticated=action.payload;
    },
    setFormNo: (state, action) => {
        state.formNo+=1;
    },
  },
});

export const {setAuthenticated,setFormNo}=userSlice.actions;
export const user= userSlice.reducer;