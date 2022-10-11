import React from "react";
import "./featurecards.css";

import HomeHealthCare from "./HomeHealthCare";
import JoinUs from "./JoinUs";
import InstaDoc from "./InstaDoc";
import Appointments from "./Appointments";

const FeatureCards = (props) => {
    return (
        <div className='cards'>
            <HomeHealthCare/>
            <JoinUs/>
            <div className='group'>
                <InstaDoc/>
                <Appointments/>
            </div>
        </div>
    )
}

export default FeatureCards;