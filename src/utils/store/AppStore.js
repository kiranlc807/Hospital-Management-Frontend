import { configureStore } from "@reduxjs/toolkit";
import HospitalSlice from "./HospitalSlice";
import DoctorSlice from "./DoctorSlice";
import AppointmentSlice from "./AppointmentSlice";
import DepartmentSlice from "./DepartmentSlice";

const appStore = configureStore({
    reducer:{
        Hospital:HospitalSlice,
        Doctor:DoctorSlice,
        Appointment:AppointmentSlice,
        Department:DepartmentSlice,
    }
})

export default appStore;