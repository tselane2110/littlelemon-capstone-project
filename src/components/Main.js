import React from "react";
import mainImg from "../icons_assets/restauranfood.jpg";
import GreekSalad from '../icons_assets/greek salad.jpg';
import Card from "./Card.js";
import TestimonialCard from "./TestimonialCard.js";
import chefs1 from '../icons_assets/Mario and Adrian A.jpg';
import chefs2 from "../icons_assets/Mario and Adrian b.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import lemonDessert from "../icons_assets/lemon dessert.jpg";
import r1 from "../icons_assets/r1.png";
import "./main.css";
import { Link } from "react-router-dom";

function Main(){

    return(
        <div className="main-section">

            {/* Hero Section */}

            <section className="Main container">
            <div className="info">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Welcome to Little Lemon, where we bring the Mediterranean to your plate. Our menu dances through Italian, Turkish, and Greek flavors, offering pastas, kebabs, and salads that are simply delicious. Every bite is a taste of the Mediterranean sunshine at Little Lemon, where simplicity meets flavor in the most delightful way.</p>
                <Link to="/bookingPage">
                    <button className="reserveTable btn-main">Reserve a Table</button>
                </Link>

            </div>
            <div className="Main-img">
                <img src={mainImg} alt="bruchetta"></img>
            </div>
        </section>

        {/* Week Special Section */}

        <section className="week-special container">
            <div className="hero-section-size">
            <div className="header">
                <h1>This Week's Specials!</h1>
                <button className="btn-main week-btn">Online Menu</button>
            </div>
            <div className="special-cards">
                <Card
                img = {GreekSalad}
                title = "Greek Salad"
                price = "$12.99"
                about = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                link = ""
                />
                <Card
                img = {bruchetta}
                title = "Bruschetta"
                price = "$5.99"
                about = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
                link = ""
                />
                <Card
                img = {lemonDessert}
                title = "Lemon Dessert"
                price = "$5.00"
                about = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                link = ""
                />
            </div>
            </div>
        </section>

        {/* Testimonials Section */}

        <section className="testimonials container">
            <div className="header">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonial-boxes">
                <TestimonialCard
                img = {r1}
                name = "Elane Mask"
                rating = {4}
                review = "Little Lemon delivered an authentic Mediterranean experience with their Greek Salad. The crisp freshness of the veggies and the rich creaminess of the feta made my day. The two brothers running the restaurant are truly very humble!"
                />
                <TestimonialCard
                img = {r1}
                name = "Ivoine"
                rating = {3}
                review = "The bruschetta at Little Lemon was very tasty, though a minor delay in service was noted. The overall experience was still enjoyable, a worthwhile visit!"
                />
                <TestimonialCard
                img = {r1}
                name = "Alien from Mars"
                rating = {4}
                review = "The bruschetta was an otherworldly delight. Your concept of time is perplexing, so I'll rate it 4/5 based on my Martian metric. Little Lemon is a cosmic gem in your gastronomic galaxy!"
                />
                <TestimonialCard
                img = {r1}
                name = "Frying Pan"
                rating = {5}
                review = "Chillin' at Little Lemon with my squad was straight-up epic and the bomb bruschetta made it the ultimate hangout spot. No cap, the service was smooth, and the whole vibe earned Little Lemon a solid 5/5. Highly recommend for a chill time with the crew."
                />
            </div>
        </section>

        {/* About Little Lemon Section */}

        <section className="about-little-lemon container">
            <div className="little-lemon-info">
                <div className="header">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <div className="about">
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                </div>
            </div>
            <div className="Mario-Adrian">
                <div className="img1">
                    <img src={chefs1} alt="Mario And Adrian" ></img>
                </div>
                <div className="img2">
                    <img src={chefs2} alt="Adrian And Mario" ></img>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Main;