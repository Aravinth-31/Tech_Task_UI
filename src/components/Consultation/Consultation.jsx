import React from "react";
import "./consultation.css";

import mobile_consultation from "../../assets/mobile_consultation.svg";
import calender from "../../assets/calender.svg";
import consult from "../../assets/consult.svg";
import digital_prescription from "../../assets/digital_prescription.svg";
import follow_ups from "../../assets/follow_ups.svg";

const Consultation = (props) => {
    return (
        <div className='consultation'>
            <div className='img-container'>
                <img src={mobile_consultation} alt="" />
            </div>
            <div className='content'>
                <h5 className='highlight'>100% SAFE AND SECURE</h5>
                <h4 className='title'>Online Doctor Consultation was never this Safe, Easy and Secured!</h4>
                <ul className='features'>
                    <li className='active'> <img alt="" src={calender} /> Select Preferred Doctor / Time Slot</li>
                    <li> <img alt="" src={consult} /> Consult Via Video, Audio or Chat</li>
                    <li> <img alt="" src={digital_prescription} /> Digital Prescription</li>
                    <li> <img alt="" src={follow_ups} /> Free Follow Ups</li>
                </ul>
                <button className='btn btn-primary'>Get Notified</button>
            </div>
        </div>

    )
}

export default Consultation;