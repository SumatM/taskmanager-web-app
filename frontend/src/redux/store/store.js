import  { configureStore } from '@reduxjs/toolkit'
import appStoreReducer from '../appReducer'



const store = configureStore({
    reducer:{
        appStoreReducer
    }
})


export default store;