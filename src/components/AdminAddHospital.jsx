import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const AddHospitalForm = ({ onSave, open, handleClose }) => {
  const [hospitalName, setHospitalName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSave = () => {
    onSave({ name:hospitalName,address: address, contactNumber:contactNumber });
    setHospitalName('');
    setAddress('');
    setContactNumber('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Hospital Info</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="hospitalName"
          label="Hospital Name"
          type="text"
          fullWidth
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="address"
          label="Address"
          type="text"
          fullWidth
          multiline
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          margin="dense"
          id="contactNumber"
          label="Contact Number"
          type="text"
          fullWidth
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddHospitalForm;
