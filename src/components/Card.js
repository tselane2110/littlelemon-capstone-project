import React from "react";
import "./Card.module.css";

function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt={props.alt}></img>
            </div>
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="card-price">
                <h3>{props.price}</h3>
            </div>
            <div className="card-about">
                <p>{props.about}</p>
            </div>
            <a href={props.link}>Order a delivery</a>
        </div>
    )
}

export default Card;