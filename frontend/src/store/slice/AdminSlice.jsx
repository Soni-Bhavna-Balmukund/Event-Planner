import {createSlice} from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name:'admin',
    initialState:{
        sidebar:false,
        adminModalType:null,
        adminModalData:null,
    },
    reducers:{
        setSidebar:(state)=>{
            state.sidebar = !state.sidebar
        },
        openAdminModal:(state,actions)=>{
            state.adminModalType = actions.payload.type,
            state.adminModalData = actions.payload.data
        },
        closeAdminModal:(state)=>{
            state.adminModalData=null,
            state.adminModalType=null
        }
    }
})

export const {setSidebar,openAdminModal,closeAdminModal} = AdminSlice.actions
export default AdminSlice.reducer