import {createSlice} from '@reduxjs/toolkit'

const appReducer = createSlice({
    name:"appData",
    initialState:{},
    reducers:{
        addCount: (state,action) =>{
           
        }
    }
})

export default appReducer.reducer;
export const {addCount} = appReducer.actions