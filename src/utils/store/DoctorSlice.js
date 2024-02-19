import { createSlice } from "@reduxjs/toolkit";

const DoctorSlice = createSlice({
    name:"Hospital",
    initialState :{
        DoctorsList:[]
    },
    reducers:{
        setDoctors : (state, action)=>{
            state.DoctorsList = action.payload;
        },
        addNewDoctor : (state, action)=>{
            state.DoctorsList.push(action.payload);
        } 
    }
});

export const {setDoctors,addNewDoctor} = DoctorSlice.actions;

export default DoctorSlice.reducer;