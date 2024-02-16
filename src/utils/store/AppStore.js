import { configureStore } from "@reduxjs/toolkit";
import HospitalSlice from "./HospitalSlice";

const appStore = configureStore({
    reducer:{
        Hospital:HospitalSlice,
    }
})

export default appStore;