import React from "react";
import "./ordering.css";

import mobile_ordering from "../../assets/mobile_ordering.svg";
import genuine from "../../assets/genuine.svg";
import easy_return from "../../assets/easy_return.svg";
import safe_delivery from "../../assets/safe_delivery.svg";
import subscription_model from "../../assets/subscription_model.svg";


const Ordering = (props) => {
    return (
        <div className='ordering'>
            <div className='img-container'>
                <img src={mobile_ordering}  alt=""/>
            </div>
            <div className='content'>
                <h5 className='highlight'>100% DIGITAL AND CONTACTLESS</h5>
                <h4 className='title'>Ordering medicines was never this Safe and Easy !</h4>
                <div className='features'>
                    <div className='feature'>
                        <img src={genuine}  alt=""/>
                        <h5 className='desc'>100% Genuine</h5>
                    </div>
                    <div className='feature'>
                        <img src={easy_return}  alt=""/>
                        <h5 className='desc'>Easy Return and Cancellation</h5>
                    </div>
                    <div className='feature'>
                        <img src={safe_delivery}  alt=""/>
                        <h5 className='desc'>Swift and Safe Delivery</h5>
                    </div>
                    <div className='feature'>
                        <img src={subscription_model}  alt=""/>
                        <h5 className='desc'>Buy them on our Subscription Model</h5>
                    </div>
                </div>
                <button className='btn btn-primary'>Get Notified</button>
            </div>
        </div>

    )
}

export default Ordering;