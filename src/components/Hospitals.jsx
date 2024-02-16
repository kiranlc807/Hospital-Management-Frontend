// Hospitals.js
import React from 'react';
import HospitalCard from './HospitalCard';
import '../css/Hospitals.css';
import { useSelector } from 'react-redux';
import FrontInfo from './FrontInfo';

const Hospitals = () => {
  const HospitalList = useSelector((store)=>store.Hospital.HospitalData);
  console.log(HospitalList,"list");

  return (
    <div className="hospitals">
      <FrontInfo/>
      <div className="hospital-list">
      <h1>Hospitals</h1>
        {   HospitalList.map((hospital)=>(
            <HospitalCard key={hospital._id} HospitalObj={hospital}/>
          ))}
      </div>
    </div>
  );
};

export default Hospitals;
