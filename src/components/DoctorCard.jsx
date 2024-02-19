// import React from "react";
// import { Card, CardContent, Typography, Button } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//     marginLeft: "10px",
//     marginRight: "10px",
//   },
//   details: {
//     flex: "1",
//     marginRight: "10px",
//   },
//   availability: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-end",
//     gap: "5px",
//     marginRight: "10px",
//   },
//   // Add media query for smaller screens+
//   "@media (max-width: 600px)": {
//     root: {
//       flexDirection: "column", // Change to column layout for smaller screens
//       alignItems: "flex-start", // Align items to the start of the column
//     },
//     details: {
//       marginRight: "0", // Remove right margin for details section
//       marginBottom: "10px", // Add bottom margin for details section
//     },
//     availability: {
//       marginRight: "5px",
//       marginLeft: "5px",
//       marginBottom: "10px",
//       // Remove right margin for availability section
//     },
//   },
// });

// const DoctorCard = ({doctor}) => {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root} variant="outlined">
//       <div className={classes.details}>
//         <CardContent>
//           <Typography variant="h6">{doctor.name}</Typography>
//           <Typography variant="body1">{doctor.qualifications}</Typography>
//         </CardContent>
//       </div>
//       <div className={classes.availability}>
//         {doctor.availability.map((timeSlot, index) => (
//           <Button key={index} variant="outlined" color="success" size="small">
//             {timeSlot}
//           </Button>
//         ))}
//       </div>
//     </Card>
//   );
// };

// export default DoctorCard;

// import React, { useState } from "react";
// import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { CreateAppointment } from "../utils/AppointmentApi";

// const useStyles = makeStyles({
//   root: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "20px",
//     marginLeft: "10px",
//     marginRight: "10px",
//   },
//   details: {
//     flex: "1",
//     marginRight: "10px",
//   },
//   availability: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "flex-end",
//     gap: "5px",
//     marginRight: "10px",
//   },
//   "@media (max-width: 600px)": {
//         root: {
//           flexDirection: "column", // Change to column layout for smaller screens
//           alignItems: "flex-start", // Align items to the start of the column
//         },
//         details: {
//           marginRight: "0", // Remove right margin for details section
//           marginBottom: "10px", // Add bottom margin for details section
//         },
//         availability: {
//           marginRight: "5px",
//           marginLeft: "5px",
//           marginBottom: "10px",
//           // Remove right margin for availability section
//         },
//       },
// });

// const DoctorCard = ({ doctor }) => {
//   const classes = useStyles();
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedSlot, setSelectedSlot] = useState("");

//   const handleSlotClick = (timeSlot) => {
//     setSelectedSlot(timeSlot);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   const handleConfirmAppointment =async() => {
//     const res = await CreateAppointment(doctor._id,{date:selectedSlot});
//     if(res.status===200){

//     }
//     console.log(`Confirmed appointment at ${selectedSlot}`);
//     setOpenDialog(false);
//   };

//   return (
//     <div>
//       <Card className={classes.root} variant="outlined">
//         <div className={classes.details}>
//           <CardContent>
//             <Typography variant="h6">{doctor.name}</Typography>
//             <Typography variant="body1">{doctor.qualifications}</Typography>
//           </CardContent>
//         </div>
//         <div className={classes.availability}>
//           {doctor.availability.map((timeSlot, index) => (
//             <Button
//               key={index}
//               variant="outlined"
//               color="success"
//               size="small"
//               onClick={() => handleSlotClick(timeSlot)}
//             >
//               {timeSlot}
//             </Button>
//           ))}
//         </div>
//       </Card>
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Confirmation</DialogTitle>
//         <DialogContent>
//           <Typography>Confirm your appointment at {selectedSlot}?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleConfirmAppointment} color="primary" autoFocus>
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default DoctorCard;

import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from "@mui/material";
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

const DoctorCard = ({ doctor }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSlotClick = (timeSlot) => {
    setSelectedSlot(timeSlot);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmAppointment = async () => {
    const res = await CreateAppointment(doctor._id, { date: selectedSlot });
    if (res.status === "Pending") {
      setSnackbarMessage("Appointment successfully created!");
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage("Failed to create appointment.");
      setSnackbarOpen(true);
    }
    setOpenDialog(false);
  };

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
              onClick={() => handleSlotClick(timeSlot)}
            >
              {timeSlot}
            </Button>
          ))}
        </div>
      </Card>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Confirm your appointment at {selectedSlot}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAppointment} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
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

