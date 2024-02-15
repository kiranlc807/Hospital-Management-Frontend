// Hospitals.js
import React from 'react';
import HospitalCard from './HospitalCard';
import '../css/Hospitals.css';

const Hospitals = ({ hospitals }) => {
  return (
    <div className="hospitals">
      <h1>Hospitals</h1>
      <div className="hospital-list">
        {/* {hospitals.map((hospital, index) => ( */}
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
        {/* // ))} */}
      </div>
    </div>
  );
};

export default Hospitals;
