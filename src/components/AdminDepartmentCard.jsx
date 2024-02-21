// import React, { useState } from "react";
// import { Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import DoctorCard from "./DoctorCard";
// import { useSelector } from "react-redux";

// const useStyles = makeStyles({
//   card: {
//     width: "200px",
//     height: "200px",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     borderRadius: "10px",
//     "&:hover": {
//       boxShadow:
//         "0px 26px 58px 0px rgba(0, 0, 0, 0.22), 0px 5px 14px 0px rgba(0, 0, 0, 0.18)",
//       cursor: "pointer"
//     }
//   }
// });

// const DepartmentCard = ({ _id, name }) => {
//   const classes = useStyles();
//   const DoctorList = useSelector((store) =>
//     store.Doctor.DoctorsList.filter((doctor) => doctor.department === _id)
//   );

//   const [open, setOpen] = useState(false);

//   const handleOpenDialog = () => {
//     setOpen(true);
//   };

//   const handleCloseDialog = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Card className={classes.card} variant="outlined" onClick={handleOpenDialog}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {name}
//           </Typography>
//         </CardContent>
//       </Card>
//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>{`${name.split(" ")[0]} Doctors`}</DialogTitle>
//         <DialogContent>
//           {DoctorList.map((doctor, index) => (
//             <DoctorCard key={index} doctor={doctor} />
//           ))}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default DepartmentCard;

import React, { useState } from "react";
import { Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoctorCard from "./AdminDoctorCard";
import { useSelector } from "react-redux";
import AddDoctor from "./AdminAddDoctor";

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
      cursor: "pointer"
    }
  },
  addButton: {
    marginBottom: "10px"
  },
  input: {
    marginBottom: "10px"
  }
});

const DepartmentCard = ({ _id, name }) => {
  const classes = useStyles();
  const DoctorList = useSelector((store) =>
    store.Doctor.DoctorsList.filter((doctor) => doctor.department === _id)
  );

  const [open, setOpen] = useState(false);
  const [openAddDoctorDialog, setOpenAddDoctorDialog] = useState(false);
  const [newDoctorData, setNewDoctorData] = useState({
    name: "",
    qualification: "",
    availability: ""
  });

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenAddDoctorDialog = () => {
    setOpenAddDoctorDialog(true);
  };

  const handleCloseAddDoctorDialog = () => {
    setOpenAddDoctorDialog(false);
  };

  const handleAddDoctor = () => {
    handleOpenAddDoctorDialog();
  };

  const handleSaveDoctor = (doctorData) => {
    // Your logic for saving the new doctor goes here
    console.log("New Doctor Data:", doctorData);
    handleCloseAddDoctorDialog();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewDoctorData({
      ...newDoctorData,
      [name]: value
    });
  };

  return (
    <div>
      <Card className={classes.card} variant="outlined" onClick={handleOpenDialog}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{`${name.split(" ")[0]} Doctors`}</DialogTitle>
        <DialogContent>
          <Button className={classes.addButton} variant="contained" onClick={handleAddDoctor}>
            ADD Doctor
          </Button>
          {DoctorList.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      <AddDoctor open={openAddDoctorDialog} handleClose={handleCloseAddDoctorDialog} handleSave={handleSaveDoctor} />
    </div>
  );
};

export default DepartmentCard;

