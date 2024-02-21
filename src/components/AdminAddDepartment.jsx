import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const AddDepartmentForm = ({ open, handleClose, handleSave }) => {
  const [departmentName, setDepartmentName] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveDepartment = () => {
    handleSave({ departmentName, description });
    setDepartmentName('');
    setDescription('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Department</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="departmentName"
          label="Department Name"
          type="text"
          fullWidth
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSaveDepartment}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddDepartmentForm;
