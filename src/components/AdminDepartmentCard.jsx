import React, { useState } from "react";
import { Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DoctorCard from "./AdminDoctorCard";
import { useSelector,useDispatch  } from "react-redux";
import { addNewDoctor } from "../utils/store/DoctorSlice";
import AddDoctor from "./AdminAddDoctor";
import { AddDoctors } from "../utils/DoctorApi";

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

const DepartmentCard = ({departmentObj,hospitalId }) => {
  const classes = useStyles();
  const _id = departmentObj._id;
  const name = departmentObj.name;
  const DoctorList = useSelector((store) =>
    store.Doctor.DoctorsList.filter((doctor) => doctor.department === _id)
  );
  
  const dispatch = useDispatch()
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

  //Api call for Add new Doctor
  const handleSaveDoctor = async(doctorData) => {
    const doctor = {
        name:doctorData.name,
        qualifications:doctorData.qualification,
        availability:doctorData.availability,
        department:departmentObj._id
    }
    console.log(doctor,"doctor");
    const res = await AddDoctors(hospitalId,doctor);
    console.log(res,"doctor response");
    dispatch(addNewDoctor(res));
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
          <Button className={classes.addButton} variant="contained" onClick={handleAddDoctor} sx={{marginBottom:"20px"}}>
            ADD Doctor
          </Button>
          {DoctorList.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} hospitalId={hospitalId}/>
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

