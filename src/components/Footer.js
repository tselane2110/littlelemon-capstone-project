import React from "react";
import icon from "../icons_assets/Logo .svg";
import "./footer.css";

function Footer(){
    return(
        <footer className="container footer">
        <div className="footer-logo">
            <img src={icon} alt='icon'/>
        </div>
        <div className="col col1">
            <h5>
                Doormat Navigation
            </h5>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </div>
        <div className="col col2">
            <h5>
                Contact US
            </h5>
            <ul>
                <li>Email</li>
                <li>Address</li>
                <li>Phone Number</li>
            </ul>
        </div>
        <div className="col col3">
            <h5>
                Social Media Links
            </h5>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
        </div>
        </footer>
    )
}

export default Footer;