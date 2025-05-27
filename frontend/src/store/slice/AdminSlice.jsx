import {createSlice} from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name:'admin',
    initialState:{
        sidebar:false
    },
    reducers:{
        setSidebar:(state)=>{
            state.sidebar = !state.sidebar
        }
    }
})

export const {setSidebar} = AdminSlice.actions
export default AdminSlice.reducer