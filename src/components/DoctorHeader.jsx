import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import "../css/AdminHeader.css"; // Import the CSS file
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetAllAppointmentByDoctor } from "../utils/AppointmentApi";
import { useNavigate, useParams } from 'react-router-dom';
import {setAppointment} from "../utils/store/AppointmentSlice";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  "@media (max-width: 600px)": {
    title: {
      fontSize: "0.9rem",
    },
  },
}));

const AdminHeader = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const route = useNavigate()
  const handleProfileMenuClose = (data) => {
    if(data==="logout"){
        route('/')
    }
    setProfileAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search with searchValue
    console.log("Search value:", searchValue);
  };


  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchData = async()=>{
          try{
              let appointments = await  GetAllAppointmentByDoctor(id);
              dispatch(setAppointment(appointments));
          }catch(error){
              console.log("Error",error);
          }
      }
      fetchData();
  });

  
  const handleAppointment=(data)=>{
    if(data==="ap"){
        route(`/doctor/${id}/app`)
    }else{
        route(`/doctor/${id}/graph`)
    }
    
  }


  return (
    <div className={classes.root}>
      <AppBar position="static" sx={{backgroundColor:"#109CFD",overflow:"hidden",position:"fixed", marginBottom: "100px"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Doctor
          </Typography>
          <form onSubmit={handleSearchSubmit} className="search">
            {" "}
            {/* Apply class name for the search form */}
            <div className="searchIcon">
              {" "}
              {/* Apply class name for the search icon */}
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: "inputRoot", // Apply class name for the input root
                input: "inputInput", // Apply class name for the input
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={handleSearchChange}
            />
          </form>
          <div className="divider">
            <Button color="inherit" size="small" classes={{ root: "button" }} onClick={()=>handleAppointment("ap")}>
              Appointments
            </Button>
            <Button color="inherit" size="small" classes={{ root: "button" }} onClick={()=>handleAppointment("gp")}>
              Graph
            </Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              keepMounted
              open={Boolean(profileAnchorEl)}
              onClose={handleProfileMenuClose}
            >
              <MenuItem onClick={() => handleProfileMenuClose("profile")}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleProfileMenuClose("logout")}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminHeader;