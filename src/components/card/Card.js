import React from "react";
import deliveryGuy from "../../icons_assets/delivery.png";
import "./card.css";

function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt={props.alt}></img>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{props.title}</h3>
                    <h3>{props.price}</h3>
                </div>
                <div className="card-about">
                    <p>{props.about}</p>
                </div>
                <div className="card-footer">
                    <div className="footer-title">
                        <a href={props.link}>Order a delivery</a>
                    </div>
                    <div className="footer-img">
                        <img src={deliveryGuy} alt="guy bringing you food"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;