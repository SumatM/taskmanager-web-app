import { createSlice } from "@reduxjs/toolkit";

let appData = JSON.parse(localStorage.getItem('appData'))


const appReducer = createSlice({
  name: "appData",
  initialState:  { slots: [], theme: "light", isAuth: false, token: "" ,...appData},
  reducers: {
    setSlot: (state, action) => {
      state.slots.push(action.payload);
    },
    setInitialSlots: (state, action) => {
      state.slots = action.payload;
    },
    setAuth :(state,action)=>{
        state.isAuth = true;
    },
    setToken:(state,action)=>{
        state = {...state,token:action.payload}
    },
  },
});

export default appReducer.reducer;
export const { setSlot, setInitialSlots,setAuth,setToken } = appReducer.actions;
