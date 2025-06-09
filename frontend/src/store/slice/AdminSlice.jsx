import {createSlice} from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name:'admin',
    initialState:{
        sidebar:false,
        adminModalType:null,
        adminModalData:null,
        modelopen:null,
        userroles:[],
        statesdata:[]
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
        Userrole:(state,actions)=>{
            state.userroles = actions.payload
        },
        setStatedata:(state,actions)=>{
            state.statesdata = actions.payload
        }

      
    }
})

export const {setSidebar,openAdminModal,closeAdminModal,Userrole,setStatedata} = AdminSlice.actions
export default AdminSlice.reducer