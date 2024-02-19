// import React, { useState } from "react";
// import { Card, CardContent, Typography} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import "../css/AppointmentCard.css"

// const useStyles = makeStyles({
//   card: {
//     minWidth: 550,
//     margin: 20,
//   },
//   status: {
//     display: "flex",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   statusLine: {
//     flexGrow: 1,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "lightgray",
//     position: "relative",
//     marginRight: 10,
//   },
//   ball: {
//     width: 20,
//     height: 20,
//     borderRadius: "50%",
//     position: "absolute",
//     top: "50%",
//     transform: "translateY(-50%)",
//   },
//   pendingBall: {
//     backgroundColor: "yellow",
//     left: 0,
//   },
//   confirmedBall: {
//     backgroundColor: "green",
//     right: 0,
//   },
//   canceledBall: {
//     backgroundColor: "red",
//     right: 0,
//   },
// });

// const AppointmentCard = ({ appointment }) => {
//   const classes = useStyles();
//   const [status, setStatus] = useState(appointment.status);

//   const handleStatusChange = () => {
//     setStatus((prevStatus) =>
//       prevStatus === "pending" ? "confirmed" : "canceled"
//     );
//   };

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <Typography variant="h6" component="h2">
//           Appointment Date: {appointment.date}
//         </Typography>
//         <Typography color="textSecondary">
//           Doctor: {appointment.doctor}
//         </Typography>
//         <Typography color="textSecondary">
//           Hospital: {appointment.hospital}
//         </Typography>
//         <div className={classes.status}>
//           <div className={classes.statusLine}>
//             <div
//               className={`${classes.ball} ${
//                 status === "pending"
//                   ? classes.pendingBall
//                   : status === "confirmed"
//                   ? classes.confirmedBall
//                   : classes.canceledBall
//               }`}
//             ></div>
//           </div>
//           <Typography variant="body2" className={classes.statusText}>
//             {status}
//           </Typography>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default AppointmentCard;

import React, { useState } from "react";
import { Card, CardContent, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../css/AppointmentCard.css"; // Import the CSS file for styling

const useStyles = makeStyles({
  // This styles object is empty because styles are defined in the CSS file
});

const AppointmentCard = ({ appointment }) => {
  const [status, setStatus] = useState(appointment.status);

  const handleStatusChange = () => {
    setStatus((prevStatus) =>
      prevStatus === "Pending" ? "Confirmed" : "Canceled"
    );
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" component="h2">
          Appointment Date: {appointment.date}
        </Typography>
        <Typography color="textSecondary">
          Doctor: {appointment.doctorName}
        </Typography>
        <Typography color="textSecondary">
          Hospital: {appointment.hospital}
        </Typography>
        <div className="status">
          <div className="statusLine">
            <div
              className={`ball ${
                status === "Pending"
                  ? "pendingBall"
                  : status === "Confirmed"
                  ? "confirmedBall"
                  : "canceledBall"
              }`}
            ></div>
          </div>
          <Typography variant="body2" className="statusText">
            {status}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
