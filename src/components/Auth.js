import React, { useState } from 'react';
import "../css/AuthForm.css"; // Import the CSS file for styles

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [view ,setView] = useState('login');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };


    return (
            <>
            { view === "login" ? (
            <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="on" />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <a onClick={()=>setView("signup")} className="signup-link">Don't have an account? Sign up here.</a>
            </div>
            ):( 
            <div className="login-container">
            <h1 className="heading">Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                <button type="submit" className="button">Signup</button>
            </form>
            <a onClick={()=>setView("login")} className="signup-link">Already have an account? LogIn here.</a>
            </div>
            )} 
            </>   
        );
};

export default LoginForm;



