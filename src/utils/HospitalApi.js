import axios from "axios";
import { BASE_URL } from "./helper";

export const getHospitals =async ()=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.get(`${BASE_URL}/api/v1/hospital`,config);
    return res.data.data;
};