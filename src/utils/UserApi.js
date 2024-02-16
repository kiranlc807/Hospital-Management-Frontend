import axios from "axios";
import { BASE_URL } from "./helper";

export const LoginApi = async(data)=>{
    const res = await axios.post(`${BASE_URL}/api/v1/users/login`,data)
    console.log("In LogIn",res.data.token);
    localStorage.setItem("Authorization",res.data.token);
    return res;
}

export const SignupApi = async(data)=>{
    const res = await axios.post(`${BASE_URL}/api/v1/users/signup`,data)
    console.log(res.data)
    return res;
}

export const SocialLoginApi = async()=>{
    const res = await axios.get(`${BASE_URL}/api/v1/users/auth/google`)
    console.log("In LogIn",res);
    localStorage.setItem("Authorization",res.data.token);
    return res;
}