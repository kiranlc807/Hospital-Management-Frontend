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

export const AddHospitals =async (data)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.post(`${BASE_URL}/api/v1/hospital/add`,data,config);
    return res.data.data;
};

export const AddDepartment =async (hospitalId,data)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.post(`${BASE_URL}/api/v1/hospital/${hospitalId}/department`,data,config);
    return res.data.data;
};