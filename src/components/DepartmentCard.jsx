// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   card: {
//     width: "200px", // Adjust the width as needed
//     height: "200px", // Adjust the height as needed
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     borderRadius: "10px",
//     '&:hover': {
//         boxShadow: '0px 26px 58px 0px rgba(0, 0, 0, 0.22), 0px 5px 14px 0px rgba(0, 0, 0, 0.18)', // Apply box-shadow on hover
//       }, // To make it square, set the border radius to half of the width/height
//   },
// });

// const DepartmentCard = ({ name }) => {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card} variant="outlined">
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {/* {description} */}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default DepartmentCard;

import React from "react";
import { Card, CardContent, Typography, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoctorCard from "./DoctorCard";
import { UseSelector, useSelector } from "react-redux";

const useStyles = makeStyles({
  card: {
    width: "200px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    "&:hover": {
      boxShadow:
        "0px 26px 58px 0px rgba(0, 0, 0, 0.22), 0px 5px 14px 0px rgba(0, 0, 0, 0.18)",
      cursor:"pointer"
    },
  },
});

const DepartmentCard = ({ _id,name }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Doctor = useSelector((store)=>store.Doctor.DoctorsList);
  const DoctorList = Doctor.filter((doctor)=>doctor.department===_id);
  console.log(DoctorList,"Doctor dep");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);

  return (
    <div>
      <Card className={classes.card} variant="outlined" onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <h2 style={{marginLeft:"10px"}}>{name.split(" ")[0]} Doctors</h2>
           {DoctorList.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}          
        </div>
      </Popover>
    </div>
  );
};

export default DepartmentCard;