import { createSlice } from "@reduxjs/toolkit";

let appData = JSON.parse(localStorage.getItem("appData"));

const appReducer = createSlice({
  name: "appData",
  initialState: {
    slots: [],
    theme: "light",
    isAuth: false,
    token: "",
    userId : "",
    ...appData,
  },
  reducers: {
    setSlot: (state, action) => {
      state.slots.push(action.payload);
    },
    setInitialSlots: (state, action) => {
      state.slots = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = true;
    },
    setToken: (state, action) => {
      state = { ...state, token: action.payload };
    },
    setLogout : (state,action)=>{
      state.isAuth = false
    },
    setupdatedSlots: (state, action) => {
      const id = action.payload._id;
      let newSlots = state.slots.map((item) => {

        return item._id == id ? action.payload : item;
      });
      state.slots = newSlots;
    },
    deleteSlot:(state,action)=>{
      const id = action.payload
      let newSlots = state.slots.filter((item) => {

        return item._id !== id 
      });
      state.slots = newSlots;
    }
  },
});

export default appReducer.reducer;
export const { setSlot, setInitialSlots, setAuth, setToken, setupdatedSlots,deleteSlot,setLogout } =
  appReducer.actions;
