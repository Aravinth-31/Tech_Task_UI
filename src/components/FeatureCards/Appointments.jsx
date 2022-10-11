import React from "react";

import appointments_card from "../../assets/appointments_card.svg";

const Appointments = (props) => {
    return (
        <div className='appointments'>
            <div className='img-container'>
                <img alt="" src={appointments_card} />
            </div>
            <h4 className='title'>In-Clinic Doctor Appointments</h4>
            <h5 className='sub-title'>VISIT DOCTORS NEAR YOU</h5>
            <p>Book your In-clinic doctor appoinments with your preferred doctor in your city/town. Choose your appointments based on your preferred date and time slot. Forget about long queues and unsure In-clinic appointments</p>
            <a href="#">Get Notified</a>
        </div>
    )
}

export default Appointments;