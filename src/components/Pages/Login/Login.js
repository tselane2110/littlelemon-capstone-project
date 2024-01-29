import React from "react";
import "./Login.css";
import Nav from "../../nav/Nav";
import LoginForm from "../../login-form/LoginForm";

function Login(){
    return(
        <section className="login">
            <div className="login-size">
                <Nav/>
                <LoginForm/>
            </div>
        </section>
    )
}

export default Login;