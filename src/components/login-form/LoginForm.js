import React from "react";
import "./LoginForm.css";
import LoginFormAPI, { loginFormAPI } from "../../BookingsAPI";
import { useState } from "react";

function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formData = {
        "email" : email,
        "password" : password
    }

    function formSubmission(e){
        e.preventDefault();
        // using submitAPI to validate form data or to validate successful booking
        if (loginFormAPI(formData) === true){
            //navigate("/confirmedBooking");
            alert("We are still working on this feature!");
            setEmail("");
            setPassword("");
        }
        else{
            alert("Please submit the form fields correctly!");
        }
    }

    return(
        <div className="login-form">
            <div className="login-form-size">
                <div className="login-form-header">
                    <h1>Login</h1>
                </div>
                <div className="login-form-body">
                    <form onSubmit={formSubmission}>
                        <div className="input">
                            <div className="input-header">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-value">
                                <input id="email" className="form-input" type="email" placeholder="Enter Email Address"
                                required
                                value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value);
                                }}>
                                </input>
                            </div>
                        </div>
                        <div className="input">
                            <div className="input-header">
                                <label htmlFor="password" className="input-header">Password</label>
                            </div>
                            <div className="input-value">
                                <input id="password" className="form-input" type="password" placeholder="Enter Password"
                                required
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value);
                                }}>
                                </input>
                            </div>
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;