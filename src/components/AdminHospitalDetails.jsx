import React, { useState, useEffect } from 'react'; // Import useEffect
import DepartmentCard from './AdminDepartmentCard';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddDepartment } from '../utils/HospitalApi';
import '../css/AdminDepartment.css';
import AddDepartmentForm from './AdminAddDepartment';
import { setDepartmentList, addNewDepartmentList } from "../utils/store/DepartmentSlice";
import {getDoctors} from "../utils/DoctorApi"
import {setDoctors} from "../utils/store/DoctorSlice"

const Departments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const HospitalList = useSelector((store) => store.Hospital.HospitalData);
  const DepartmentList = useSelector((store) => store.Department.DepartmentList);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hospital = HospitalList.find((hospital) => hospital._id === id);
    dispatch(setDepartmentList(hospital ? hospital.departments : []));
  }, [dispatch, id, HospitalList]);


  useEffect(()=>{
    const fetchData = async()=>{
      const doctors = await getDoctors(id);
      dispatch(setDoctors(doctors));
    }
    fetchData();
  },[])
  const handleAddDepartment = () => {
    setOpen(true);
  };

  const handleSaveDepartment = async (newDepartment) => {
    const departmentObj = { name: newDepartment.departmentName, description: newDepartment.description };
    const res = await AddDepartment(id, departmentObj);
    dispatch(addNewDepartmentList(res));
    setOpen(false);
  };

  return (
    <div className="departments-container">
      <div className="button-div">
        <button className="add-button" onClick={handleAddDepartment}>
          Add Department
        </button>
      </div>
      <AddDepartmentForm open={open} handleClose={() => setOpen(false)} handleSave={handleSaveDepartment} />
      <div className="department-list">
        {DepartmentList.map((department) => (
          <DepartmentCard key={department._id} departmentObj={department} hospitalId={id} />
        ))}
      </div>
    </div>
  );
};

export default Departments;

