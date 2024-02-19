import React, { useState,useEffect } from 'react';
import { TextField, Button, Typography, Link } from '@mui/material';
import "../css/AuthForm.css"; // Import the CSS file for styles
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LoginApi,SignupApi,SocialLoginApi} from '../utils/UserApi';
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phNo,setPhNo] = useState(null);
    const [view ,setView] = useState('login');

    const route = useNavigate();
    const handleSubmit = async(e) => {
      console.log(email,password,"hello");
        if(e==="login"){
          const res = await LoginApi({email:email,password:password});
          console.log(res,"rs");
          if(res.status==200){
            route('/dashboard/hospital')
          }
        }else{
          const res = await SignupApi({name:name,email:email,contactNumber:phNo,password:password});
          console.log(res,'Signup response');
        }
    };
    const handleSocialLogin = () => {
      // Redirect the user to Google's authentication page
      window.location.href = 'http://localhost:3000/api/v1/users/auth/google';
  };


    return (
            
            <div className='body'>
            { view === "login" ? (
            <div className="login-container">
            <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center',marginBottom:"10%" }}>Login</Typography>
            <form style={{marginBottom:"10px"}}>
                <div className="input-container">
                    <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="on" className='input-container' />
                </div>
                <div className="input-container">
                    <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-container' required />
                </div>
                <Button type="submit" variant="contained" className='button' onClick={()=>handleSubmit("login")}>Login</Button>
            </form>
            <Link onClick={()=>setView("signup")} className="signup-link">Don't have an account? Sign up here.</Link>
            <p style={{textAlign:"center"}}>or</p>
            <div className="social-media">
                 <a href="#" className="social-icon" onClick={handleSocialLogin}> 
                    <i className="fab fa-facebook-f"></i>
                   <GoogleIcon/>
                 </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                   <FacebookIcon/>
                 </a>
                 <a href="#" className="social-icon">
                   <i className="fab fa-google"></i>
                   <LinkedInIcon/>
                 </a>
                 <a href="#" className="social-icon">
                   <i className="fab fa-linkedin-in"></i>
                   <GitHubIcon/>
                 </a>
             </div>
            </div>
            ):( 
            <div className="login-container">
            <Typography variant="h4" className="heading" style={{ display: 'flex', justifyContent: 'center',marginBottom:"10%" }}>Signup</Typography>
            <form style={{marginBottom:"10px"}}>
                <div className="input-container">
                    <TextField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className='input-container'/>
                </div>
                <div className="input-container">
                    <TextField label="Email" type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required className='input-container'/>
                </div>
                <div className="input-container">
                    <TextField label="Contact Number" type="text" value={phNo} onChange={(e) => setPhNo(e.target.value)} required className='input-container'/>
                </div>
                <div className="input-container">
                    <TextField label="Password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className='input-container'/>
                </div>
                <Button type="submit" variant="contained" className='button'  onClick={()=>handleSubmit("signup")}>Signup</Button>
            </form>
            <Link onClick={()=>setView("login")} className="signup-link">Already have an account? LogIn here.</Link>
            <p style={{textAlign:"center"}}>or</p>
            <div className="social-media">
                 <a href="#" className="social-icon" onClick={handleSocialLogin}>
                   <i className="fab fa-facebook-f"></i>
                   <GoogleIcon/>
                 </a>
                 <a href="#" className="social-icon">
                   <i className="fab fa-twitter"></i>
                   <FacebookIcon/>
                 </a>
                 <a href="#" className="social-icon">
                   <i className="fab fa-google"></i>
                   <LinkedInIcon/>
                 </a>
                 <a href="#" className="social-icon">
                   <i className="fab fa-linkedin-in"></i>
                   <GitHubIcon/>
                 </a>
             </div>
            </div>
            )}
            </div> 
              
        );
};

export default LoginForm;

// import React, { useState } from 'react';
// import EmailIcon from '@mui/icons-material/Email';
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import login from "../assets/undraw_mobile_content_xvgr.svg";
// import signup from "../assets/undraw_love_it_xkc2 (1).svg";

// import '../css/AuthForm.css';

// const SignInSignUpForm = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggleMode = () => {
//     setIsSignIn(prevState => !prevState);
//   };

//   return (
//     <div className={`container ${isSignIn ? '' : 'sign-up-mode'}`}>
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form action="#" className={isSignIn ? 'sign-in-form' : 'sign-up-form'}>
//             <h2 className="title">{isSignIn ? 'Sign in' : 'Sign up'}</h2>
//             <div className="input-field">
//               {/* <i className="fas fa-user"></i> */}
//               <PersonIcon style={{marginTop:"28%",marginLeft:"25%", color:"#808080"}}/>
//               <input type="text" placeholder="Username" />
//             </div>
//             {!isSignIn && (
//               <div className="input-field">
//                 {/* <i className="fas fa-envelope"></i> */}
//                 <EmailIcon style={{marginTop:"28%",marginLeft:"25%", color:"#808080"}}/>
//                 <input type="email" placeholder="Email" />
//               </div>
//             )}
//             <div className="input-field">
//               {/* <i className="fas fa-lock"></i> */}
//               <LockIcon style={{marginTop:"28%",marginLeft:"25%", color:"#808080"}}/>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value={isSignIn ? 'Login' : 'Sign up'} className="btn solid" />
//             <p className="social-text">Or Sign {isSignIn ? 'in' : 'up'} with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 {/* <i className="fab fa-facebook-f"></i> */}
//                 <GoogleIcon/>
//               </a>
//               <a href="#" className="social-icon">
//                 {/* <i className="fab fa-twitter"></i> */}
//                 <FacebookIcon/>
//               </a>
//               <a href="#" className="social-icon">
//                 {/* <i className="fab fa-google"></i> */}
//                 <LinkedInIcon/>
//               </a>
//               <a href="#" className="social-icon">
//                 {/* <i className="fab fa-linkedin-in"></i> */}
//                 <GitHubIcon/>
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>{isSignIn ? 'New here ?' : 'One of us ?'}</h3>
//             <p>
//               {isSignIn
//                 ? <img src={login} style={{height:"50%",width:"50%"}} />
//                 : <img src={signup} className="signup-img" />}
//             </p>
//             <button className="btn transparent" onClick={toggleMode}>
//               {isSignIn ? 'Sign up' : 'Sign in'}
//             </button>
//           </div>
//           <img src={isSignIn ? 'img/log.svg' : 'img/register.svg'} className="image" alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>{isSignIn ? 'New here ?' : 'One of us ?'}</h3>
//             <p>
//               {isSignIn
//                 ? <img src={login} style={{height:"50%",width:"50%"}}/>
//                 : <img src={signup} className="signup-img"/>}
//             </p>
//             <button className="btn transparent" onClick={toggleMode}>
//               {isSignIn ? 'Sign up' : 'Sign in'}
//             </button>
//           </div>
//           <img src={isSignIn ? 'img/register.svg' : 'img/log.svg'} className="image" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInSignUpForm;




