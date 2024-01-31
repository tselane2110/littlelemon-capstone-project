import React from "react";
import deliveryGuy from "../../icons_assets/delivery_guy.png";
import "./card.css";
import { useState, useEffect } from "react";

function Card(props){

    const title = props.title;
    const price = props.price;
    const [quantity, setQuantity] = useState(0);
    const [q, setQ] = useState(quantity)

    useEffect(() => {
        setQuantity(quantity);
        setQ(quantity);
        console.log("current actual quantity: ", quantity);
      }, [quantity]);

    const cart_item = {
        'title': title,
        'price': price,
        'quantity': q
    }

    const handleAdd = () =>{
        setQuantity(prevQuantity => prevQuantity + 1);
        const strPrice = cart_item["price"];
        const intPrice = parseInt(strPrice.replace(/[^0-9.-]+/g,""));
        cart_item["quantity"] = q;
        cart_item["price"] = "$"+(intPrice*q);
        props.onItemClick(cart_item);
    }

    const handleSubtract = () =>{
        setQuantity(prevQuantity => prevQuantity - 1);
        if (quantity <= 0){
            console.log(quantity);
            setQuantity(0);
            cart_item["title"] = "";
            cart_item["price"] = "";
            props.onItemClick(cart_item);
        }

        else{
            const strPrice = cart_item["price"];
            const intPrice = parseInt(strPrice.replace(/[^0-9.-]+/g,""));
            cart_item["quantity"] = q;
            cart_item["price"] = "$"+(intPrice*q);
            props.onItemClick(cart_item);
        }
    }

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
                        <button onClick={handleSubtract}>-</button>
                    </div>
                    <div className="footer-img">
                        <img src={deliveryGuy} alt="guy bringing you food"></img>
                    </div>
                    <div className="add add-sub-btn">
                        <button onClick={handleAdd}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;