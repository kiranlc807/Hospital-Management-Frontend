import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Chip } from "@mui/material";

const AddDoctor = ({ open, handleClose, handleSave }) => {
  const [doctorData, setDoctorData] = useState({
    name: "",
    qualification: "",
    availability: [],
    tempAvailability: "" // Temporary state to hold availability input
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDoctorData({
      ...doctorData,
      [name]: value
    });
  };

  const handleAvailabilityChange = (event) => {
    setDoctorData({
      ...doctorData,
      tempAvailability: event.target.value
    });
  };

  const handleAddAvailability = () => {
    if (doctorData.tempAvailability.trim() !== "") {
      setDoctorData({
        ...doctorData,
        availability: [...doctorData.availability, doctorData.tempAvailability],
        tempAvailability: "" // Reset tempAvailability
      });
    }
  };

  const handleRemoveAvailability = (index) => {
    const updatedAvailability = [...doctorData.availability];
    updatedAvailability.splice(index, 1);
    setDoctorData({
      ...doctorData,
      availability: updatedAvailability
    });
  };

  const handleSaveDoctor = () => {
    // Ensure tempAvailability is added to availability array if not empty
    if (doctorData.tempAvailability.trim() !== "") {
      handleAddAvailability();
    }
    // Pass doctorData to the handleSave function
    handleSave(doctorData);
    // Reset doctorData state
    setDoctorData({
      name: "",
      qualification: "",
      availability: [],
      tempAvailability: ""
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
          required
          margin="normal"
        />
        <TextField
          label="Qualification"
          variant="outlined"
          name="qualification"
          value={doctorData.qualification}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <div style={{ marginBottom: "1rem" }}>
          <TextField
            label="Availability"
            variant="outlined"
            value={doctorData.tempAvailability}
            onChange={handleAvailabilityChange}
            margin="dense"
          />
          <Button variant="outlined" onClick={handleAddAvailability} style={{ marginLeft: "0.5rem",marginTop:"1rem" }}>
            Add
          </Button>
        </div>
        {doctorData.availability.map((slot, index) => (
          <Chip
            key={index}
            label={slot}
            onDelete={() => handleRemoveAvailability(index)}
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveDoctor}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDoctor;

