import { createSlice} from '@reduxjs/toolkit'

const toastSlice= createSlice({
    name:"toast",
    initialState:{
        message:'',
        type:''
    },
    reducers:{
        showtoast(state,action){
            state.message=action.payload.message,
            state.type=action.payload.type
        },
        closetoast(state){
            state.message='',
            state.type=''
        }
    }
})

export const {showtoast,closetoast} = toastSlice.actions
export default toastSlice.reducer