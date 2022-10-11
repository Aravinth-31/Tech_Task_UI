import React from "react";
import healthsyLogo from "../../assets/HEALTHSYLOGOFINAL.svg";
import "./header.css";
import dropdown from "../../assets/dropdown.svg";
import dropdown_black from "../../assets/dropdown_black.svg";

const Header = (props) => {
    const handleClick = () => {
        const ele = document.querySelector("#dropdown1");
        if (ele.classList.contains("show"))
            ele.classList.remove("show")
        else
            ele.classList.add("show");
    }
    const toggleSelector = (e) => {
        const liElement = e.target.parentElement.parentElement
        const parent = liElement.parentElement;
        const childNodes = parent.childNodes;
        childNodes.forEach((ele) => {
            if (ele.id !== liElement.id)
                ele.classList.remove("active");
            else {
                if (ele.classList.contains("active"))
                    ele.classList.remove("active");
                else
                    ele.classList.add("active");
            }
        })
    }
    return (
        <header className="header">
            <div className="contents">
                <img src={healthsyLogo} alt="" />
                <div className="dropdown">
                    <button className="btn btn-secondary" onClick={handleClick}>HealthSynergy <img src={dropdown} alt="" /></button>
                    <div className="dropdown-items" id="dropdown1">
                        <li onClick={toggleSelector} id="item1"><span>Partner With Us</span></li>
                        <li onClick={toggleSelector} id="item2" className="active">
                            <span className="content"><span>For Doctors</span><img src={dropdown_black} alt="" /></span>
                            <div className="sub-drop-down">
                                <li>Register Your Interest</li>
                                <li>Book a Demo</li>
                            </div>
                        </li>
                        <li onClick={toggleSelector} id="item3">
                            <span className="content"><span>For Retail Pharmacies</span><img src={dropdown_black} alt="" /></span>
                            <div className="sub-drop-down">
                                <li>Sell With Us</li>
                            </div>
                        </li>
                        <li onClick={toggleSelector} id="item4">
                            <span className="content"><span>For Home Healthcare Service Providers</span><img src={dropdown_black} alt="" /></span>
                            <div className="sub-drop-down">
                                <li>Register Your Interest</li>
                            </div>
                        </li>
                        <li onClick={toggleSelector} id="item5"><span className="content"><span>Others</span><img src={dropdown_black} alt="" /></span></li>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;