import { createSlice } from "@reduxjs/toolkit";

const HospitalSlice = createSlice({
    name:"Hospital",
    initialState :{
        HospitalData:[]
    },
    reducers:{
        setHospitals : (state, action)=>{
            state.HospitalData = action.payload;
        },
        addNewHospital : (state, action)=>{
            state.HospitalData.push(action.payload);
        } 
    }
});

export const {setHospitals,addNewHospital} = HospitalSlice.actions;

export default HospitalSlice.reducer;