import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "../css/DoctorAppointmentCard.css"; // Importing styles from CSS file

const DoctorAppointmentCard = ({
  id,
  date,
  patientName,
  status,
  onConfirm,
  onCancel,
}) => {
  return (
    <Card className="card">
      <CardContent className="content">
        <Typography variant="h6" gutterBottom>
          {date}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Patient: {patientName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Status: {status}
        </Typography>
      </CardContent>
      <div className="actions">
        <Button
          variant="contained"
          color="primary"
          className="button" // Apply confirmButton class
          onClick={()=>onConfirm(id)}
        >
          Confirm
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="button"
          onClick={()=>onCancel(id)}
        >
          Cancel
        </Button>
      </div>
    </Card>
  );
};

export default DoctorAppointmentCard;