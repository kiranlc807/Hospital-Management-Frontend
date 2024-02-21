import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

const AddDoctor = ({ open, handleClose, handleSave }) => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    qualification: "",
    availability: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctorData({
      ...doctorData,
      [name]: value
    });
  };

  const handleSaveDoctor = () => {
    handleSave(doctorData);
    setDoctorData({
      name: "",
      qualification: "",
      availability: ""
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Doctor</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={doctorData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Qualification"
          variant="outlined"
          name="qualification"
          value={doctorData.qualification}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Availability"
          variant="outlined"
          name="availability"
          value={doctorData.availability}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveDoctor}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDoctor;
