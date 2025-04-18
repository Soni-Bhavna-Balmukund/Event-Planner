import {createSlice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name:'modal',
    initialState:{
        modal:false,
        searchModal:false,
    },
    reducers:{
        revieMmodalShow:(state)=>{
            state.modal = !state.modal
        },
        searchModal:(state)=>{
            state.searchModal=!state.searchModal
        }
    }
    
})

export const {revieMmodalShow,searchModal} = modalSlice.actions
export default modalSlice.reducer
