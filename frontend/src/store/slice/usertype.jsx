import { createSlice } from "@reduxjs/toolkit";

const usertypeSlice = createSlice({
    name:'usertype',
    initialState:{
        custtype:[],
        selectedRole:'',
        grouptype:[],
        categorytype:[],
        country:[],
    },
    reducers:{
        custtypes:(state,action)=>{
            state.custtype = action.payload
        },
        setSelectedRole:(state,action)=>{
            state.selectedRole = action.payload//will store cust role
        },
        grouptypes:(state,action)=>{
            state.grouptype=action.payload//will set cust type
        },
        categorytypes:(state,action)=>{
            state.categorytype=action.payload
        },
        countries:(state,action)=>{
            state.country = action.payload
        }
    }
})

export const {custtypes,setSelectedRole,grouptypes,categorytypes,countries} = usertypeSlice.actions
export default usertypeSlice.reducer