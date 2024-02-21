import { createSlice } from "@reduxjs/toolkit";

const DepartmentSlice = createSlice({
    name:"Department",
    initialState :{
        DepartmentList:[]
    },
    reducers:{
        setDepartmentList : (state, action)=>{
            state.DepartmentList = action.payload;
        },
        addNewDepartmentList : (state, action)=>{
            state.DepartmentList.push(action.payload);
        } 
    }
});

export const {setDepartmentList,addNewDepartmentList} = DepartmentSlice.actions;

export default DepartmentSlice.reducer;