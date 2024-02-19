import React, { useEffect } from "react";
import "../css/HospitalDetails.css";
import img from "../assets/undraw_medicine_b-1-ol (1).svg"
import DepartmentCard from "./DepartmentCard";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {getDoctors} from "../utils/DoctorApi"
import {setDoctors} from "../utils/store/DoctorSlice"

const HospitalDetails = () => {
  const HospitalList = useSelector((store)=>store.Hospital.HospitalData);
  const hospitalId = useParams();
  const Hospital = HospitalList.find((hospital)=>hospital._id===hospitalId.id);
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async()=>{
      const doctors = await getDoctors(hospitalId.id);
      dispatch(setDoctors(doctors));
    }
    fetchData();
  },[])
  

  return (
    <div className="hospital-details">
      <div className="hospital-info">
        <div className="left-column">
          <h2>{Hospital.name}</h2>
          <p>
            <strong>Address:</strong> {Hospital.address}
          </p>
          <p>
            <strong>Contact Number:</strong> {Hospital.contactNumber}
          </p>
        </div>
        <div className="right-column">
          <img src={img} alt="Hospital" className="hospital-image" />
        </div>
      </div>
      <div className="department-div">
        <div style={{marginLeft: "3%"}}>
        <h3 >Departments</h3>
        </div>
        <div className="department-list">
        {Hospital.departments.map((department)=>(
          <DepartmentCard key={department._id} {...department}/>
        ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalDetails;