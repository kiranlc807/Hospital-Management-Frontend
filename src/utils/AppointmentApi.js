import axios from "axios";
import { BASE_URL } from "./helper";

export const CreateAppointment =async (doctorId,date)=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.post(`${BASE_URL}/api/v1/appointment/${doctorId}`,date,config);
    return res.data.data;
};

export const GetAllAppointment = async ()=>{
    const token = localStorage.getItem('Authorization');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    };
    const res = await axios.get(`${BASE_URL}/api/v1/appointment/`,config);
    return res.data.data;
}