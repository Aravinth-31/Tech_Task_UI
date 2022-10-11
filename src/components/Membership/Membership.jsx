import React from "react";
import "./membership.css";

import mobile_membership from "../../assets/mobile_membership.svg";

const Membership = (props) => {
    return (
        <div className='membership'>
            <div className='contents'>
                <h4 className='title'>HealthSy Plus Membership</h4>
                <ul className='features'>
                    <li>2% Extra Cashback on medicine Orders</li>
                    <li>2% Extra cashback on Healthcare Products</li>
                    <li>Free Online Doctor Consultations</li>
                    <li>Extra Discount On Home Healthcare Services</li>
                    <li>Free Deliveries</li>
                </ul>
                <button className='btn btn-primary'>Get Notified</button>
            </div>
            <img className='mobile' src={mobile_membership}  alt=""/>
        </div>
    )
}

export default Membership;