import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';

const AppointmentGraph = ({ appointments }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy existing chart instance
    }

    const ctx = chartRef.current.getContext('2d');
    const confirmedCount = appointments.filter(appointment => appointment.status === 'Confirmed').length;
    const canceledCount = appointments.filter(appointment => appointment.status === 'Canceled').length;
    const pendingCount = appointments.filter(appointment => appointment.status === 'Pending').length;

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Confirmed', 'Canceled', 'Pending'],
        datasets: [{
          label: 'Appointments',
          data: [confirmedCount, canceledCount, pendingCount],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup when component unmounts
      }
    };
  }, [appointments]);

  return <canvas ref={chartRef} />;
};



const AppointmentsPage = () => {
const appointment = useSelector((store)=>store.Appointment.AppointmentList);
  return (
    <div style={{width:"60%",marginTop:"74px",height:"auto"}}>
      <h2>Appointment Graph</h2>
      <AppointmentGraph appointments={appointment} />
    </div>
  );
};

export default AppointmentsPage;

