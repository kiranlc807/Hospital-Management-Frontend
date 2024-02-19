import { createSlice } from "@reduxjs/toolkit";

const AppointmentSlice = createSlice({
    name:"Appointment",
    initialState :{
        AppointmentList:[]
    },
    reducers:{
        setAppointment : (state, action)=>{
            state.AppointmentList = action.payload;
        }
    }
});

export const {setAppointment} = AppointmentSlice.actions;

export default AppointmentSlice.reducer;