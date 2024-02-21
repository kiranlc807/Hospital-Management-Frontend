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
import { getHospitals } from "../utils/HospitalApi";
import { useDispatch } from "react-redux";
import { setHospitals } from "../utils/store/HospitalSlice";

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
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
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
              let hospitals = await getHospitals();
              console.log(hospitals);
              dispatch(setHospitals(hospitals))
          }catch(error){
              console.log("Error",error);
          }
      }
      fetchData();
  });


  return (
    <div className={classes.root}>
      <AppBar position="static" sx={{backgroundColor:"#109CFD",overflow:"hidden",position:"fixed", marginBottom: "100px"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Admin
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
            <Button color="inherit" size="small" classes={{ root: "button" }}>
              Hospital
            </Button>
            <Button color="inherit" size="small" classes={{ root: "button" }}>
              Doctor
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
