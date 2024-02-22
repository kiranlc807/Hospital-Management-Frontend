import React, { useState } from 'react';
import HospitalCard from './AdminHospitalCard';
import { useSelector , useDispatch} from 'react-redux';
import '../css/AdminHospitals.css';
import AddHospitalForm from './AdminAddHospital'; 
import { AddHospitals } from '../utils/HospitalApi';
import {addNewHospital} from "../utils/store/HospitalSlice"

const AdminHospitals = () => {
  const HospitalList = useSelector((store) => store.Hospital.HospitalData);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const handleSaveHospital = async(newHospital) => {
    const res = await AddHospitals(newHospital);
    dispatch(addNewHospital(newHospital));
    setOpen(false);
  };

  return (
    <div className="main">
      <div className="button-div">
      <button className="add-button" onClick={()=>setOpen(true)}>
       ADD Hospital
       </button>
      </div>
      <AddHospitalForm open={open} handleClose={() => setOpen(false)} onSave={handleSaveHospital} />
      <div className="hospital-list">
        {HospitalList.map((hospital) => (
          <HospitalCard key={hospital._id} HospitalObj={hospital} />
        ))}
      </div>
    </div>
  );
};

export default AdminHospitals;

