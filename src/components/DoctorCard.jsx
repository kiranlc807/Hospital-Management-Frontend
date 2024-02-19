import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
  },
  availability: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "5px",
    marginRight: "10px",
  },
  // Add media query for smaller screens+
  "@media (max-width: 600px)": {
    root: {
      flexDirection: "column", // Change to column layout for smaller screens
      alignItems: "flex-start", // Align items to the start of the column
    },
    details: {
      marginRight: "0", // Remove right margin for details section
      marginBottom: "10px", // Add bottom margin for details section
    },
    availability: {
      marginRight: "5px",
      marginLeft: "5px",
      marginBottom: "10px",
      // Remove right margin for availability section
    },
  },
});

const DoctorCard = () => {
  const classes = useStyles();
  const name = "Dr. John Doe";
  const qualification = "MBBS, MD";
  const availability = ["Monday 10:00 AM", "Tuesday 2:00 PM", "Friday 4:00 PM"];

  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.details}>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{qualification}</Typography>
        </CardContent>
      </div>
      <div className={classes.availability}>
        {availability.map((timeSlot, index) => (
          <Button key={index} variant="outlined" color="primary" size="small">
            {timeSlot}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default DoctorCard;