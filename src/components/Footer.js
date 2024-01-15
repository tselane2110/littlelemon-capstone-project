import React from "react";
import icon from "../icons_assets/Logo .svg";
import "./Footer.module.css";

function Footer(){
    return(
        <footer className="container">
        <img
            src={icon}
            alt='icon'
        />
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
        <h5>
            Contact US
        </h5>
        <ul>
            <li>Email</li>
            <li>Address</li>
            <li>Phone Number</li>
        </ul>
        <h5>
            Social Media Links
        </h5>
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
        </footer>
    )
}

export default Footer;