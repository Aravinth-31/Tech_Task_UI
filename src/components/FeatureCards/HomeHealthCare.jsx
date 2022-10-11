import React from "react";

import mobile_healthcare from "../../assets/mobile_healthcare.svg";
import mobile_healthcare_sub from "../../assets/mobile_healthcare_sub.svg";

const HomeHealthCare = (props) => {
    return (
        <div className='home-healthcare'>
            <img src={mobile_healthcare}  alt=""/>
            <img src={mobile_healthcare_sub} className="sub-img"  alt=""/>
            <div className='content'>
                <h4 className='title'>Home Healthcare Services</h4>
                <p>Booking home based quality healthcare services was never this simple and organized with HealthSy. Get your healthcare services done from the environment you love - Your home</p>
                <button className='btn btn-primary'>Get Notified</button>
            </div>
        </div>
    )
}

export default HomeHealthCare;