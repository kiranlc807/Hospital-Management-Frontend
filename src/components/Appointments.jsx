// import React, { useState } from "react";
// import { Card, CardContent, Typography} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import AppointmentCard from "./AppointmentCard"; // Import the AppointmentCard component

// const useStyles = makeStyles({
//   appointmentsContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop:"74px",
//     width: "100%",
//   },
// });

// const Appointments = () => {
//   const classes = useStyles();

//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       date: "2022-01-01",
//       doctor: "Dr. John Doe",
//       hospital: "ABC Hospital",
//       status: "confirmed",
//     },
//     {
//       id: 2,
//       date: "2022-01-02",
//       doctor: "Dr. Jane Smith",
//       hospital: "XYZ Clinic",
//       status: "pending",
//     },
//     {
//       id: 3,
//       date: "2022-01-03",
//       doctor: "Dr. Michael Johnson",
//       hospital: "123 Medical Center",
//       status: "canceled",
//     },
//   ]);

//   // Function to update status of an appointment
//   const updateStatus = (id, newStatus) => {
//     setAppointments((prevAppointments) =>
//       prevAppointments.map((appointment) =>
//         appointment.id === id
//           ? { ...appointment, status: newStatus }
//           : appointment
//       )
//     );
//   };

//   // Calculate total, confirmed, and canceled appointments
//   const totalAppointments = appointments.length;
//   const confirmedAppointments = appointments.filter(
//     (appointment) => appointment.status === "confirmed"
//   ).length;
//   const canceledAppointments = appointments.filter(
//     (appointment) => appointment.status === "canceled"
//   ).length;

//   return (
//     <div className={classes.appointmentsContainer}>
//       <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
//       <div>Total Appointments: ({totalAppointments})</div>
//       <div>Confirmed : ({confirmedAppointments})</div>
//       <div>Canceled : ({canceledAppointments})</div>
//       </div>
//       <div>
//         {appointments.map((appointment) => (
//           <AppointmentCard
//             key={appointment.id}
//             appointment={appointment}
//             updateStatus={updateStatus}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Appointments;

import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AppointmentCard from "./AppointmentCard";
import {GetAllAppointment} from "../utils/AppointmentApi";
import "../css/Appointments.css"; 
import { useDispatch,useSelector  } from "react-redux";
import { setAppointment } from "../utils/store/AppointmentSlice";
import { colors } from "@mui/material";


const Appointments = () => {
  const AppointmentList = useSelector((store)=>store.Appointment.AppointmentList);
  const HospitalList = useSelector((store)=>store.Hospital.HospitalData);
  const dispatch = useDispatch();
  useEffect(()=>{
      const fetchData = async()=>{
        const appointment = await GetAllAppointment();
        const simplifiedAppointments = appointment.map(appointment => {
          const hospitalname = HospitalList.find((hospital)=>hospital._id===appointment.doctor.hospital);
          return ({doctorName: appointment.doctor.name,
            status: appointment.status,
            date: appointment.date,
            hospital: hospitalname&&hospitalname.name});
        })
        dispatch(setAppointment(simplifiedAppointments));
      };
      fetchData();
  },[])


  // Function to update status of an appointment
  // const updateStatus = (id, newStatus) => {
  //   setAppointments((prevAppointments) =>
  //     prevAppointments.map((appointment) =>
  //       appointment.id === id
  //         ? { ...appointment, status: newStatus }
  //         : appointment
  //     )
  //   );
  // };

  // Calculate total, confirmed, and canceled appointments
  const totalAppointments = AppointmentList.length;
  const confirmedAppointments = AppointmentList.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;
  const canceledAppointments = AppointmentList.filter(
    (appointment) => appointment.status === "Canceled"
  ).length;

  return (
    <div className="appointmentsContainer">
      <div className="statisticsRow">
        <div>Total Appointments: ({totalAppointments})</div>
        <div>Confirmed : ({confirmedAppointments})</div>
        <div>Canceled : ({canceledAppointments})</div>
      </div>
      <div>
        {AppointmentList.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
