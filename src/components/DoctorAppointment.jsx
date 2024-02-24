import React from 'react';
import DoctorAppointmentCard from './DoctorAppointmentsCard';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {setAppointment} from "../utils/store/AppointmentSlice";
import { updateAppointment } from '../utils/AppointmentApi';

const DoctorAppointments = () => {
  const { id } = useParams();
  const Appointment = useSelector((store)=>store.Appointment.AppointmentList);
  console.log(Appointment,"new");

  const dispatch = useDispatch();
  const handleConfirm = async(id) => {
    const uAppointment = Appointment.map((app)=>{
        if(app._id===id){
            return {
                ...app,
                status:"Confirmed"
            }
        }
        return app;
    })
    dispatch(setAppointment(uAppointment));
    const res = await updateAppointment({appointmentId:id,status:"Confirmed"})
  };
  

  const handleCancel = async(id) => {
    const uAppointment = Appointment.map((app)=>{
        if(app._id===id){
            return {
                ...app,
                status:"Canceled"
            }
        }
        return app;
    })
    dispatch(setAppointment(uAppointment));
    const res = await updateAppointment({appointmentId:id,status:"Canceled"})

  };

  return (
    <div style={{marginTop:"74px"}}>
        <h2>Appointment Graph</h2>
      {Appointment&&Appointment.map((appointment, index) => (
        <DoctorAppointmentCard
          key={index}
          id={appointment._id} // Ensure each card has a unique key
          date={appointment.date}
          patientName={appointment.patient}
          status={appointment.status}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      ))}
    </div>
  );
};

export default DoctorAppointments;
// import React from 'react';
// import DoctorAppointmentCard from './DoctorAppointmentsCard';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const DoctorAppointments = () => {
//   const { id } = useParams();
//   const appointmentList = useSelector((store) => store.Appointment.AppointmentList);
//   const updatedAppointment = appointmentList.find((appointment) => appointment._id === id);

//   const handleConfirm = () => {
//     console.log('Appointment confirmed');
//   };

//   const handleCancel = () => {
//     console.log('Appointment canceled');
//   };

//   return (
//     <div style={{ marginTop: "74px" }}>
//       {updatedAppointment && updatedAppointment.appointments.map((appointment, index) => (
//         <DoctorAppointmentCard
//           key={index} // Ensure each card has a unique key
//           date={appointment.date}
//           patientName={appointment.patientName}
//           status={appointment.status}
//           onConfirm={handleConfirm}
//           onCancel={handleCancel}
//         />
//       ))}
//     </div>
//   );
// };

// export default DoctorAppointments;
