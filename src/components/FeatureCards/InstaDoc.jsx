import React from "react";

import instadoc_card from "../../assets/instadoc_card.svg";

const InstaDoc=(props)=>{
    return(
        <div className='instadoc'>
        <div className='img-container'>
            <img src={instadoc_card} alt="" />
        </div>
        <h4 className='title'>InstaDoc 24*7</h4>
        <h5 className='sub-title'>Never feel helpless with HealthSy's InstaDoc</h5>
        <ul className='features'>
            <li>Connect with a doctor instantly</li>
            <li>Consult via video, audio and chat</li>
            <li>Strictly not for emergency use</li>
            <li>Available 24*7</li>
        </ul>
        <a href="#">Get Notified</a>
    </div>
    )
}

export default InstaDoc;