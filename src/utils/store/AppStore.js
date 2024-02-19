import { configureStore } from "@reduxjs/toolkit";
import HospitalSlice from "./HospitalSlice";
import DoctorSlice from "./DoctorSlice";
import AppointmentSlice from "./AppointmentSlice";

const appStore = configureStore({
    reducer:{
        Hospital:HospitalSlice,
        Doctor:DoctorSlice,
        Appointment:AppointmentSlice,
    }
})

export default appStore;