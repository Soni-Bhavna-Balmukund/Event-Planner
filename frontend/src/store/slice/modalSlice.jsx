import {createSlice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name:'modal',
    initialState:{
        modal:false,
        searchModal:false,
        loginModal:false,
        signupModal:false
    },
    reducers:{
        revieMmodalShow:(state)=>{
            state.modal = !state.modal
        },
        searchModal:(state)=>{
            state.searchModal=!state.searchModal
        },
        loginModal:(state)=>{
            state.loginModal=!state.loginModal
        },
        signupModal:(state)=>{
            state.signupModal=!state.signupModal
        }
    }
    
})

export const {revieMmodalShow,searchModal,loginModal,signupModal} = modalSlice.actions
export default modalSlice.reducer
