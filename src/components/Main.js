import React from "react";
import mainImg from "../icons_assets/bruchetta.svg";
import GreekSalad from '../icons_assets/greek salad.jpg';
import Card from "Card.js";


function Main(){
    return(
        <>
        <section className="Main">
            <div className="info">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="Main-img">
                <img src={mainImg} alt="bruchetta"></img>
            </div>
            <button>Reserve Table</button>
        </section>
        <section className="week-special">
            <div className="header">
                <h1>This Week's Special!</h1>
                <button>Order Now</button>
            </div>
            <div className="special-cards">
                <Card
                img = {GreekSalad}
                title = "Greek Salad"
                price = "$12.99"
                about = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                link = ""
                />
            </div>
        </section>
        <section className="testimonials">
            <div className="header">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonial-boxes">
                <div className="ratings">
                    <></>
                </div>
            </div>
        </section>
        </>
    )
}

export default Main;