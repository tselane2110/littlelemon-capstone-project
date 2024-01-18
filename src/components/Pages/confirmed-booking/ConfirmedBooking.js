import React from "react";
import "./ConfirmedBooking.css";
import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";

function ConfirmedBooking(){
    return(

        <div>
            <Nav/>
            <div className="confirmed-booking">
                <div className="cb-size">
                    <h1>Your Table Has Been Reserved!</h1>
                    <Link to="/">
                        <button>Back to Home</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ConfirmedBooking;