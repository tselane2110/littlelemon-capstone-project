import React from "react";
import mainImg from "../icons_assets/bruchetta.svg";
import GreekSalad from '../icons_assets/greek salad.jpg';
import Card from "./Card.js";
import TestimonialCard from "./TestimonialCard.js";
import chefs1 from '../icons_assets/Mario and Adrian A.jpg';
import chefs2 from "../icons_assets/Mario and Adrian b.jpg";
import styled from "styled-components";


const Section = styled.section`
padding-left: 100px;
padding-right: 100px;
`
const divInfo = {
    "left" : "289px",
    "top" : "170px",
    "width" : "422px",
    "height" : "331px"
}

function Main(){
    return(
        <>
        <Section className="Main container">
            <div className="info" style={divInfo}>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve Table</button>
            </div>
            <div className="Main-img">
                <img src={mainImg} alt="bruchetta"></img>
            </div>
        </Section>
        <Section className="week-special container">
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
        </Section>
        <Section className="testimonials container">
            <div className="header">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonial-boxes">
                <TestimonialCard
                rating = {4}
                review = "Little Lemon in Chicago delivered an authentic Mediterranean experience with their Greek Salad. The crisp freshness of the veggies and the rich creaminess of the feta made for a delightful culinary adventure. The two brothers running the restaurant truly captured the essence of Mediterranean flavors in the heart of Chicago."
                />
            </div>
        </Section>
        <Section className="about-little-lemon container">
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
                <img src={chefs1} alt="Mario And Adrian"></img>
                <img src={chefs2} alt="Adrian And Mario"></img>
            </div>
        </Section>
        </>
    )
}

export default Main;