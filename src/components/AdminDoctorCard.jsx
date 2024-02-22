import React from "react";
import { Card, CardContent, Typography, Button, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CreateAppointment } from "../utils/AppointmentApi";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  details: {
    flex: "1",
    marginRight: "10px",
    width:"50%"
  },
  availability: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "5px",
    marginRight: "10px",
  },
  "@media (max-width: 600px)": {
    root: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    details: {
      marginRight: "0",
      marginBottom: "10px",
    },
    availability: {
      marginRight: "5px",
      marginLeft: "5px",
      marginBottom: "10px",
    },
  },
});

const DoctorCard = ({ doctor,hospitalId }) => {
  const classes = useStyles();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <div className={classes.details}>
          <CardContent>
            <Typography variant="h6">{doctor.name}</Typography>
            <Typography variant="body1">{doctor.qualifications}</Typography>
          </CardContent>
        </div>
        <div className={classes.availability}>
          {doctor.availability.map((timeSlot, index) => (
            <Button
              key={index}
              variant="outlined"
              color="success"
              size="small"
            //   onClick={handleCreateAppointment}
            >
              {timeSlot}
            </Button>
          ))}
        </div>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </div>
  );
};

export default DoctorCard;
