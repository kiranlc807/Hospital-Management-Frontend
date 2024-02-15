import React from 'react'
import "../css/FrontInfo.css"
import img from "../assets/undraw_love_it_xkc2 (1).svg"

function FrontInfo() {
  return (
    <div className="container">
      <div className="text">
        <h2>DoctorOne</h2>
        <p>Where convenience meets care, empowering patients to take charge of their health journey with just a click.</p>
      </div>
      <div className="image">
        {/* <img src={img} alt="Doctor Appointment Web Application" className='img'/> */}
      </div>
    </div>
  )
}

export default FrontInfo