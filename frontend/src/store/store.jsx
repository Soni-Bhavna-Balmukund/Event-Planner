import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './slice/modalSlice'
import toastReducer from './slice/toastify'
import usertypeReducer from './slice/usertype'

const store = configureStore({
    reducer:{
        modal : modalReducer,
        toast: toastReducer,
        usertype:usertypeReducer
    }
})

export default store