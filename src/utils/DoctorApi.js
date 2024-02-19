import axios from "axios";
import { BASE_URL } from "./helper";

export const getDoctors =async (hospitalId)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.get(`${BASE_URL}/api/v1/doctors/${hospitalId}`,config);
    return res.data.data;
};