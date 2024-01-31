import React from "react";
import icon from "../../icons_assets/Logo .svg";
import "./footer.css";
import { Link } from "react-router-dom";

// get current date

const getCurrentDate = () => {
    const today = new Date();
    //const day = today.getDate().toString().padStart(2, '0');
    //const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = today.getFullYear();

    return `${year}`;

    // return `${day}-${month}-${year}`;
}

function Footer(){
    return(
        <>
            <footer className="footer">
            <div className="footer-size">
            <div className="footer-logo">
                <img src={icon} alt='icon'/>
            </div>
            <div className="col col1">
                <h5>
                    Doormat Navigation
                </h5>
                <ul>
                    <li>
                        <Link to="/" className="doormat-nav">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="doormat-nav">About</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="doormat-nav">Menu</Link>
                    </li>
                    <li>
                        <Link to="/bookingPage" className="doormat-nav">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/orderOnline" className="doormat-nav">Order Online</Link>
                    </li>
                    <li>
                        <Link to="/login" className="doormat-nav">Login</Link>
                    </li>
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
            </div>
            </footer>
            <p className="copyright-msg">Copyright © {getCurrentDate()} by <a href="https://github.com/tselane2110" target="_blank" rel="noreferrer">Tanzeela Sehar</a> All Rights Reserved.</p>
        </>
    )
}

export default Footer;