import React from "react";
import healthsyLogo from "../../assets/HEALTHSYLOGOFINAL.svg";
import "./header.css";
import dropdown from "../../assets/dropdown.svg";
import dropdown_black from "../../assets/dropdown_black.svg";

const Header = (props) => {
    const handleClick=()=>{
        const ele=document.querySelector("#dropdown1");
        if(ele.classList.contains("show"))
            ele.classList.remove("show")
        else
            ele.classList.add("show");
    }
    return (
        <header className="header">
            <div className="contents">
                <img src={healthsyLogo} alt="" />
                <div className="dropdown">
                    <button className="btn btn-secondary" onClick={handleClick}>HealthSynergy <img src={dropdown}  alt=""/></button>
                    <div className="dropdown-items" id="dropdown1">
                        <li><span>Partner With Us</span></li>
                        <li><span>For Doctors</span><img src={dropdown_black}  alt=""/></li>
                        <li><span>For Retail Pharmacies</span><img src={dropdown_black}  alt=""/></li>
                        <li><span>For Home Healthcare Service Providers</span><img src={dropdown_black}  alt=""/></li>
                        <li><span>Others</span><img src={dropdown_black} alt="" /></li>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;