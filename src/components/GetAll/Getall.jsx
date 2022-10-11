import React from "react";
import "./getall.css";

import get_all_mobile from "../../assets/get_all_mobile.svg";

const Getall = (props) => {
    return (
        <div className='get-all-container'>
            <div className='content'>
                <h5 className='highlight'>WIDEST RANGE AND ATTRACTIVE PRICES</h5>
                <h4 className='title'>Get all your Healthcare Products on HealthSy</h4>
                <ul className='features'>
                    <li>15+ Categories</li>
                    <li>30+ Sub-Categories</li>
                    <li>Top Brands</li>
                </ul>
                <button className='btn btn-primary'>Get Notified</button>
            </div>
            <div className='img-container'>
                <img src={get_all_mobile}  alt=""/>
            </div>
        </div>

    )
}

export default Getall;