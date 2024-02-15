import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import DoctorIcon from "@mui/icons-material/LocalHospital";
import "../css/Header.css";

const Header = () => {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <div>
    <AppBar position="static" className="appBar" sx={{backgroundColor:"#ffc107",overflow:"hidden",position:"fixed", marginBottom: "100px"}}>
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