import React, { useState } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import "../css/AuthForm.css"; // Import the CSS file for styles
import { LoginApi,SignupApi,SocialLoginApi} from '../utils/UserApi';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const route = useNavigate();
    const handleSubmit = async(e) => {
        if(e==="login"){
          const res = await LoginApi({email:email,password:password});
          console.log(res.data.role,"response");
          if(res.data.role==="admin"){
            route('/admindash/hospital')
          }else{
            alert("Please provide Admin Credential")
          }
        }
    };

    return (
        <div className='body'>
        <div className="login-container">
            <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center',marginBottom:"10%" }}>Admin Login</Typography>
            <form style={{marginBottom:"10px"}}>
                <div className="input-container">
                    <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="on" className='input-container' />
                </div>
                <div className="input-container">
                    <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-container' required />
                </div>
                <Button variant="contained" className='button' onClick={()=>{handleSubmit("login")}}>Login</Button>
            </form>
        </div>
      </div>
    )};

export default LoginForm;