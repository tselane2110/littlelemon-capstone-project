import React from "react";
import "./AboutPage.css";
import Nav from "../../nav/Nav";
import Footer from "../../footer/Footer";
import Timings from "../../timings/Timings";
import restaurant from "../../../icons_assets/restaurant.jpg";

function AboutPage(){
    return(
        <>
        <Nav/>
        <section className="about-page">
            <div className="about-page-size">
                <div className="aboutPage-header">
                    <h1>Welcome to Little Lemon!</h1>
                    <div className="r-img">
                        <img src = {restaurant} alt="LittleLemon"></img>
                    </div>
                </div>
                <div className="aboutPage-body">
                    <p>At Little Lemon, our aim is to transport you to the sun-soaked landscapes of the Mediterranean with every bite. Whether you're savoring a time-honored Italian pasta or exploring the bold flavors of Turkish and Greek cuisines, our menu is a celebration of diversity and culinary excellence.</p>
                    <p>Join us on a gastronomic journey curated with love, tradition, and a touch of Mediterranean magic. Little Lemon is more than a restaurant; it's a tribute to the flavors that bring people together and the dream that turned two brothers into culinary pioneers. Experience the essence of our story with every visit, and let your taste buds embark on a voyage of discovery.</p>
                </div>
            </div>
        </section>
        <Timings/>
        
        <Footer/>
        </>
    )
}

export default AboutPage;