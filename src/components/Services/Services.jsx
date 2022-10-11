import React from "react";
import "./services.css";

import consultations from "../../assets/consultations.svg";
import services from "../../assets/services.svg";
import products from "../../assets/products.svg";
import appointments from "../../assets/appointments.svg";
import instaDoc from "../../assets/instaDoc.svg";
import medicine from "../../assets/medicine.svg";

const Services = (props) => {
    return (
        <div className='our-services'>
            <h4 className='title'>OUR SERVICES</h4>
            <div className='services'>
                <div className='service'>
                    <img src={medicine} className='icon'  alt=""/>
                    <h5 className='description'>Order </h5>
                    <h5 className='description'>Medicines </h5>
                </div>
                <div className='service'>
                    <img src={consultations} className='icon'  alt=""/>
                    <h5 className='description'>Online Doctor</h5>
                    <h5 className='description'>Consultations </h5>
                </div>
                <div className='service'>
                    <img src={services} className='icon' alt="" />
                    <h5 className='description'>Home Healthcare</h5>
                    <h5 className='description'>Services </h5>
                </div>
                <div className='service'>
                    <img src={products} className='icon' alt="" />
                    <h5 className='description'>Healthcare </h5>
                    <h5 className='description'>Products </h5>
                </div>
                <div className='service'>
                    <img src={appointments} className='icon' alt="" />
                    <h5 className='description'>In-clinic Doctor</h5>
                    <h5 className='description'>Appointments </h5>
                </div>
                <div className='service'>
                    <img src={instaDoc} className='icon' alt="" />
                    <h5 className='description'>InstaDoc </h5>
                    <h5 className='description'>24*7 </h5>
                </div>
            </div>
        </div>
    )
}

export default Services;