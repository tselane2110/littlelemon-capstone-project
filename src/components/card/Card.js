import React from "react";
import deliveryGuy from "../../icons_assets/delivery_guy.png";
import "./card.css";

function Card(props){
    return(
        <div className="card">
            <div className="card-img">
                <img src={props.img} alt={props.alt}></img>
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3 className="title">{props.title}</h3>
                    <h3 className="price">{props.price}</h3>
                </div>
                <div className="card-about">
                    <p>{props.about}</p>
                </div>
                <div className="card-footer">
                    <div className="subtract add-sub-btn">
                        <button>-</button>
                    </div>
                    <div className="footer-img">
                        <img src={deliveryGuy} alt="guy bringing you food"></img>
                    </div>
                    <div className="add add-sub-btn">
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;