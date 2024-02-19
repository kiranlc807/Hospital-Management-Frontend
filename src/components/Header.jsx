import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DoctorIcon from "@mui/icons-material/LocalHospital";
import { useEffect } from "react";
import { getHospitals } from "../utils/HospitalApi";
import { useDispatch } from "react-redux";
import { setHospitals } from "../utils/store/HospitalSlice";
import "../css/Header.css";

const Header = () => {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);
  const userDataParam = urlParams.get('userData');
  const userData = JSON.parse(userDataParam);
  if(userData){
      localStorage.setItem("Authorization",userData.token);
  }
  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchData = async()=>{
          try{
              let hospitals = await getHospitals();
              console.log(hospitals);
              dispatch(setHospitals(hospitals))
          }catch(error){
              console.log("Error",error);
          }
      }
      fetchData();
  });

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <div>
    <AppBar position="static" className="appBar" sx={{backgroundColor:"#109CFD",overflow:"hidden",position:"fixed", marginBottom: "100px"}}>
      <Toolbar>
        <Typography variant="h6" className="title">
          <DoctorIcon />
          <span className="doctorName">DoctorOne</span>
        </Typography>
        <div className="buttonGroup">
            <div className="button-Home">
                <Button color="inherit" className="button">
                    Home
                </Button>
            </div>
            <div className="button-Appointment">
                <Button color="inherit" className="button">
                    Appointments
                </Button>
            </div>
            <div className="button-Aboutus" >
                <Button color="inherit"className="button" >
                    AboutUs
                </Button>
            </div>
            <div className="button-Profile">
                <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                    <AccountCircleIcon />
                </IconButton>
            </div>
          <Menu
            id="profile-menu"
            anchorEl={profileAnchorEl}
            keepMounted
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Header;