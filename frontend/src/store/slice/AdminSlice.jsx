import {createSlice} from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name:'admin',
    initialState:{
        sidebar:false,
        adminModalType:null,
        adminModalData:null,
        modelopen:null,
    },
    reducers:{
        setSidebar:(state)=>{
            state.sidebar = !state.sidebar
        },
        openAdminModal:(state,actions)=>{
            state.adminModalType = actions.payload.type,
            state.adminModalData = actions.payload.data,
            state.modelopen=actions.payload.openmodel
        },
        closeAdminModal:(state)=>{
            state.adminModalData=null,
            state.adminModalType=null
            state.modelopen=null
        },
      
    }
})

export const {setSidebar,openAdminModal,closeAdminModal} = AdminSlice.actions
export default AdminSlice.reducer