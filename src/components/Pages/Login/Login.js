import React from "react";
import "./Login.css";
import Nav from "../../nav/Nav";
import LoginForm from "../../login-form/LoginForm";
import Footer from "../../footer/Footer";

function Login(){
    return(
        <>
            <Nav/>
            <LoginForm/>
            <Footer/>
        </>
    )
}

export default Login;