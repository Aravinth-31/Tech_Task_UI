import React from "react";
import "./subscription.css";

import mobile_subscription from "../../assets/mobile_subscription.svg";

import reminder from "../../assets/reminder.svg";
import pay_at_convenience from "../../assets/pay_at_convenience.svg";
import change_dosage from "../../assets/change_dosage.svg";
import easy_cancellation from "../../assets/easy_cancellation.svg";
import offers from "../../assets/offers.svg";
import timely_delivery from "../../assets/timely_delivery.svg";
import easy_selection from "../../assets/easy_selection.svg";
import easy_return_logo from "../../assets/easy_return_logo.svg";

const Subscription = (props) => {
    return (
        <div className='subscription'>
            <div className='container'>
                <img className='mobile-img' src={mobile_subscription}  alt=""/>
                <div className='content'>
                    <h4 className='title'>HealthSy Advantage Subscription</h4>
                    <h5 className='sub-title'>Never Run out of Refills with HealthSy advantage</h5>
                    <ul className='features'>
                        <li><span className='img-container'><img src={reminder}  alt=""/></span> Auto Reminders</li>
                        <li><span className='img-container'><img src={pay_at_convenience} alt="" /></span>Pay at your Convenience</li>
                        <li><span className='img-container'><img src={change_dosage}  alt=""/></span>Change Dosage</li>
                        <li><span className='img-container'><img src={easy_cancellation} alt="" /></span>Easy Cancellation</li>
                        <li><span className='img-container'><img src={offers}  alt=""/></span>Offers</li>
                        <li><span className='img-container'><img src={timely_delivery}  alt=""/></span>Timely Delivery</li>
                        <li><span className='img-container'><img src={easy_selection}  alt=""/></span>Easy Selection</li>
                        <li><span className='img-container'><img src={easy_return_logo} alt="" /></span>Easy Return</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Subscription;