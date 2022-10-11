import React from "react";
import "./footer.css";
import logo from "../../assets/logo_b&w.svg";
import linkedin_logo from "../../assets/linkedin_logo.svg";
import facebook_logo from "../../assets/facebook_logo.svg";
import instagram_logo from "../../assets/instagram_logo.svg";
import twitter_logo from "../../assets/twitter_logo.svg";
import playstore_logo from "../../assets/playstore_logo.svg";
import appstore_logo from "../../assets/appstore_logo.svg";

const Footer =(props)=>{
    return(
        <footer className="footer">
            <div className="top">
                <div className="left">
                    <img className="logo" src={logo} alt=""/>
                    <p>We are a health-tech startup that prioritises your health over anything else and thus bringing to you all the necessary healthcare services under one app.</p>
                </div>
                <div className="middle">
                    <h4 className="title">Follow Us On</h4>
                    <div className="social-media">
                        <img src={linkedin_logo} alt="" />
                        <img src={facebook_logo}  alt=""/>
                        <img src={instagram_logo} alt="" />
                        <img src={twitter_logo}  alt=""/>
                    </div>
                    <p>Health Articles and Guides</p>
                </div>
                <div className="right">
                    <h4 className="title">Launching Shortly...</h4>
                    <div className="stores">
                        <img src={playstore_logo}  alt=""/>
                        <img src={appstore_logo}  alt=""/>
                    </div>
                    <button className="btn btn-light">Get Notified</button>
                </div>
            </div>
            <div className="bottom">
                <h5><span className="icon">©</span>HealthSy 2022. All Rights Reserved.</h5>
            </div>
        </footer>
    )
}

export default Footer;